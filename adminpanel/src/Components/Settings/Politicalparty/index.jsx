import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { FaSearch, FaPen, FaTrash } from 'react-icons/fa';

// ✅ Import all party images
import admk from '../../../assets/images/party/admk.png';
import bjp from '../../../assets/images/party/bjp.png';
import dmk from '../../../assets/images/party/dmk.png';
import pmk from '../../../assets/images/party/pmk.png';
import ammk from '../../../assets/images/party/ammk.png';
import dmdk from '../../../assets/images/party/dmdk.png';
import noparty from '../../../assets/images/party/no-party.png';
import inc from '../../../assets/images/party/inc.png';
import vck from '../../../assets/images/party/vck.png';
import mdmk from '../../../assets/images/party/mdmk.png';
import cpim from '../../../assets/images/party/cpim.png';
import cpi from '../../../assets/images/party/cpi.png';
import tvk from '../../../assets/images/party/tvk.png';
import ntk from '../../../assets/images/party/ntk.png';
import defaultImg from '../../../assets/images/party/default.png';

// ✅ Image map
const imageMap = {
  'admk.png': admk,
  'bjp.png': bjp,
  'dmk.png': dmk,
  'pmk.png': pmk,
  'ammk.png': ammk,
  'dmdk.png': dmdk,
  'no-party.png': noparty,
  'inc.png': inc,
  'vck.png': vck,
  'mdmk.png': mdmk,
  'cpim.png': cpim,
  'cpi.png': cpi,
  'tvk.png': tvk,
  'ntk.png': ntk,
};

const PartySettings = () => {
  const [parties, setParties] = useState([
    { id: 1, name: 'அ.தி.மு.க', short: 'ADMK', image: 'admk.png' },
    { id: 2, name: 'பா.ஜ.க', short: 'BJP', image: 'bjp.png' },
    { id: 3, name: 'தி.மு.க', short: 'DMK', image: 'dmk.png' },
    { id: 4, name: 'பா.ம.க', short: 'PMK', image: 'pmk.png' },
    { id: 5, name: 'அ.ம.மு.க', short: 'AMMK', image: 'ammk.png' },
    { id: 6, name: 'தே.மு.தி.க', short: 'DMDK', image: 'dmdk.png' },
    { id: 7, name: 'நடுநிலை', short: 'No Party (Swing Voters)', image: 'no-party.png' },
    { id: 8, name: 'காங்கிரஸ்', short: 'INC', image: 'inc.png' },
    { id: 9, name: 'வி.சிக', short: 'VCK', image: 'vck.png' },
    { id: 10, name: 'ம.தி.மு.க', short: 'MDMK', image: 'mdmk.png' },
    { id: 11, name: 'CPI-M', short: 'CPI-M', image: 'cpim.png' },
    { id: 12, name: 'CPI', short: 'CPI', image: 'cpi.png' },
    { id: 13, name: 'த.வெ.க', short: 'TVK', image: 'tvk.png' },
    { id: 14, name: 'நாம் தமிழர்', short: 'NTK', image: 'ntk.png' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null);
  const [newParty, setNewParty] = useState({ name: '', short: '', image: '' });

  const filteredParties = parties.filter(
    (party) =>
      party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      party.short.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditChange = (id, field, value) => {
    setParties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this party?')) {
      setParties((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAddParty = () => {
    if (!newParty.name || !newParty.short || !newParty.image)
      return alert('Please fill in all fields.');

    const newId = parties.length ? Math.max(...parties.map((p) => p.id)) + 1 : 1;
    setParties([...parties, { ...newParty, id: newId }]);
    setNewParty({ name: '', short: '', image: '' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setNewParty({ ...newParty, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const getImageSrc = (img) => {
    if (typeof img === 'string' && img.startsWith('data:')) return img;
    if (typeof img === 'string') return imageMap[img] || defaultImg;
    return img;
  };

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f0f6fb', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: '600' }}>Parties</h2>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <FaSearch style={{ position: 'absolute', top: '10px', left: '12px', color: '#999' }} />
        <Input
          type="text"
          placeholder="Search Political Party"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ paddingLeft: '2.2rem', borderRadius: '25px', height: '42px' }}
        />
      </div>

      {/* Add Party */}
      <div style={{ marginBottom: '2rem', background: '#fff', padding: '1rem', borderRadius: '10px' }}>
        <h5>Add New Party</h5>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Input
            type="text"
            placeholder="Party Name"
            value={newParty.name}
            onChange={(e) => setNewParty({ ...newParty, name: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Short Name"
            value={newParty.short}
            onChange={(e) => setNewParty({ ...newParty, short: e.target.value })}
          />
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
          <Button color="primary" onClick={handleAddParty}>
            Add
          </Button>
        </div>
        {newParty.image && (
          <img
            src={newParty.image}
            alt="Preview"
            style={{ width: 40, height: 40, marginTop: '0.5rem', borderRadius: '4px' }}
          />
        )}
      </div>

      {/* Party List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {filteredParties.map((party) => (
          <div
            key={party.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={getImageSrc(party.image)}
              alt={party.name}
              style={{ width: '35px', height: '35px', objectFit: 'cover', marginRight: '1rem' }}
            />

            {editId === party.id ? (
              <>
                <Input
                  value={party.name}
                  onChange={(e) => handleEditChange(party.id, 'name', e.target.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                <Input
                  value={party.short}
                  onChange={(e) => handleEditChange(party.id, 'short', e.target.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                <Button size="sm" color="success" onClick={() => setEditId(null)}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: '600' }}>{party.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>{party.short}</div>
                </div>
                <FaPen
                  onClick={() => setEditId(party.id)}
                  style={{ color: '#007bff', marginRight: '1rem', cursor: 'pointer' }}
                />
                <FaTrash
                  onClick={() => handleDelete(party.id)}
                  style={{ color: '#dc3545', cursor: 'pointer' }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartySettings;
