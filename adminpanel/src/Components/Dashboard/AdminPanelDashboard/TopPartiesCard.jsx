import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Image, H5 } from "../../../AbstractElements";
import ReactApexChart from "react-apexcharts";

// Party logos
import dmkLogo from "../../../assets/images/parties/dmk.png";
import ldfLogo from "../../../assets/images/parties/ldf.png";
import congressLogo from "../../../assets/images/parties/congress.png";

// Assign colors for parties
const partyColors = {
  DMK: "#ff4d4f",
  LDF: "#52c41a",
  Congress: "#1890ff",
};

// Dummy party data
const partiesData = {
  Kerala: [
    { image: ldfLogo, title: "LDF", seats: 52, subTitle: "Leading in seats" },
    {
      image: congressLogo,
      title: "Congress",
      seats: 48,
      subTitle: "Strong opposition",
    },
    { image: dmkLogo, title: "DMK", seats: 40, subTitle: "Third position" },
  ],
  "Tamil Nadu": [
    {
      image: dmkLogo,
      title: "DMK",
      seats: 120,
      subTitle: "Dominating majority",
    },
    {
      image: congressLogo,
      title: "Congress",
      seats: 90,
      subTitle: "Close competition",
    },
    { image: ldfLogo, title: "LDF", seats: 24, subTitle: "Emerging player" },
  ],
  Telangana: [
    {
      image: congressLogo,
      title: "Congress",
      seats: 65,
      subTitle: "Leading in polls",
    },
    { image: dmkLogo, title: "DMK", seats: 45, subTitle: "Strong presence" },
    { image: ldfLogo, title: "LDF", seats: 9, subTitle: "Small share" },
  ],
};

// Radial chart component
const PartyRadialChart = ({ chartData }) => {
  const chartOptions = {
    series: chartData.series,
    options: {
      chart: {
        height: 80,
        width: 80,
        type: "radialBar",
        sparkline: { enabled: true },
      },
      plotOptions: {
        radialBar: {
          hollow: { size: "65%" },
          track: { strokeWidth: "50%", opacity: 0.2 },
          dataLabels: {
            show: true,
            name: { show: false },
            value: {
              fontSize: "14px",
              fontWeight: 500,
              color: "#6c757d",
              formatter: (val) => `${val}%`,
            },
          },
        },
      },
      colors: chartData.color,
      stroke: { lineCap: "round" },
    },
  };

  return (
    <ReactApexChart
      type="radialBar"
      height={80}
      options={chartOptions.options}
      series={chartOptions.series}
    />
  );
};

// Party card widget styled like SocialWidget
const PartyWidget = ({ data }) => {
  return (
    <Card
      className="social-widget widget-hover shadow-sm border-0 rounded"
      style={{ minWidth: "200px" }}
    >
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="social-icons d-flex align-items-center justify-content-center"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                attrImage={{
                  src: data.image,
                  alt: data.title,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  },
                }}
              />
            </div>

            <span>{data.title}</span>
          </div>
          <span className="font-success f-12 d-xxl-block d-xl-none">
            +{data.gros}%
          </span>
        </div>
        <div className="social-content">
          <div>
            <H5 attrH5={{ className: "mb-1" }}>{data.total}</H5>
            <span className="f-light">{data.subTitle}</span>
          </div>
          <div className="social-chart">
            <PartyRadialChart chartData={data.chart} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Main widget
const TopPartiesWidget = ({ selectedState }) => {
  const stateParties = partiesData[selectedState] || [];
  const totalSeats = stateParties.reduce((sum, p) => sum + p.seats, 0);

  return (
    <Row >
      {stateParties.map((party, idx) => {
        const percent = ((party.seats / totalSeats) * 100).toFixed(1);
        return (
          <Col xs="12" sm="6" md="4" lg="4" className="mb-3" key={idx}>
            <PartyWidget
              data={{
                image: party.image,
                title: party.title,
                gros: percent,
                total: `${party.seats} Seats`,
                subTitle: party.subTitle,
                chart: {
                  series: [parseFloat(percent)],
                  color: [partyColors[party.title] || "#8884d8"],
                },
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default TopPartiesWidget;
