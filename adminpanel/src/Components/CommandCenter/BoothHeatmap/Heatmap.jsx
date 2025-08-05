import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';

// Sample geojson + booths for fallback
const sampleGeojson = {
  center: [25.276987, 55.296249], // Dubai coords
};

const sampleBooths = [
  { id: 1, name: "Booth 1", coords: [25.276987, 55.296249], turnout: 25 },
  { id: 2, name: "Booth 2", coords: [25.280987, 55.300249], turnout: 45 },
  { id: 3, name: "Booth 3", coords: [25.270987, 55.290249], turnout: 75 },
];

export default function Heatmap({ booths, turnout, geojson }) {
  const mapGeojson = geojson && geojson.center ? geojson : sampleGeojson;
  const boothData = booths && booths.length > 0 ? booths : sampleBooths;

  const getColor = (percentage) => {
    if (percentage <= 30) return "#ff4d4f";
    if (percentage <= 60) return "#faad14";
    return "#52c41a";
  };

  // Convert coordinates to [lat, lng] format safely
  const formatCoords = (coords) => {
    if (Array.isArray(coords)) return coords; // already [lat, lng]
    if (coords && coords.lat !== undefined && coords.lng !== undefined) {
      return [coords.lat, coords.lng];
    }
    return null; // invalid coords
  };

  return (
    <MapContainer
      center={mapGeojson.center}
      zoom={14}
      style={{ height: 400, width: "100%" }}
    >
<TileLayer
  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.carto.com/">CARTO</a>'
  subdomains="abcd"
  maxZoom={20}
/>


      {boothData.map((booth) => {
        const coords = formatCoords(booth.coords);
        if (!coords) return null; // skip if invalid coords
        return (
          <CircleMarker
            key={booth.id}
            center={coords}
            radius={12}
            fillOpacity={0.7}
            color={getColor(booth.turnout)}
          >
            <Tooltip>
              <strong>{booth.name}</strong>
              <br />
              Turnout: {booth.turnout}%
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
