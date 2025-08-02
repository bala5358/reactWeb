import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FiCheck,FiXCircle   } from 'react-icons/fi';
import { FaQuestion, FaRegArrowAltCircleUp,FaGreaterThan,FaWheelchair    } from "react-icons/fa";
import { FaPeopleGroup,FaRegCircleUser  } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
const TransFilterModal = ({ show, onClose, onApply }) => {
  const [gender, setGender] = useState('');
  const [history, setHistory] = useState([]);
  const [category, setCategory] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(120);
  const [party, setParty] = useState([]);
  const [religion, setReligion] = useState([]);
 
 
const historyIcons = [
  { icon: <FiCheck  />,color: '#28a745'},
  { icon: <FiXCircle />,color: '#af1726ff'},
  { icon: <FaQuestion  />,color: '#080808ff'},
   { icon: <FaRegArrowAltCircleUp  />,color: '#3e3d58ff'},
    { icon: <FaGreaterThan />,color: '#586acfff'},
    { icon: <FaWheelchair />,color: '#6892e0ff'},
    { icon: <FaPeopleGroup />,color: '#c20f0fff'},
    { icon: <FaRegCircleUser  />,color: '#6380ddff'},
    { icon: <MdPeople   />,color: '#dd6363ff'},
   
];
const politicalParty = [
 
   { image: 'https://i.pinimg.com/736x/64/3e/7b/643e7b6c16df3cc17b6e3e0b686e68e9.jpg', color: '#f57c00' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Bx84dv1KxuEZGlKjPMVcR-xbH-MOQDSY1Q&s', color: '#1e88e5' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/AIADMK_Flag.svg/2560px-AIADMK_Flag.svg.png', color: '#43a047' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG7v1iCUFTK4L9nZMXeIzwwSgKj6P3FCM0A&s', color: '#d32f2f' },
   { image: 'https://i.pinimg.com/736x/71/eb/2c/71eb2cc75e9615acd590e8b8e3967707.jpg', color: '#f57c00' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pmk_flag.jpg/800px-Pmk_flag.jpg', color: '#1e88e5' },
  { image: 'https://www.crwflags.com/fotw/images/i/in%7Ddmdk3.gif', color: '#43a047' },
  { image: 'https://www.crwflags.com/fotw/images/i/in%7Dntk1.gif', color: '#d32f2f' },
  { image: 'https://media.istockphoto.com/id/1308364732/vector/flag-of-the-communist-party.jpg?s=612x612&w=0&k=20&c=zPfg3R4SgqgxuAKt-xGkOQCAfaQKT7N5SkNABo97IVY=', color: '#d32f2f' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Indian_National_Congress_Flag.svg/2560px-Indian_National_Congress_Flag.svg.png', color: '#d32f2f' },
];
const Religion = [
 
   { image: 'https://icon2.cleanpng.com/lnd/20241213/io/81e15e52bf703527d539a40e2f66b9.webp', color: '#ff0000ff' },
  { image: 'https://cdn0.iconfinder.com/data/icons/religion-in-the-world/512/09-512.png', color: '#1e88e5' },
  { image: 'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-christianity-cross-glyph-icon-vector-png-image_1886214.jpg', color: '#43a047' },
 
];
  const toggleHistory = (val) => {
    setHistory((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };
 
  const toggleCategory = (val) => {
    setCategory((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };
 
  const clearAll = () => {
    setMinAge(0);
    setMaxAge(120);
    setGender('');
    setHistory([]);
    setCategory([]);
    setParty([]);
    setReligion([]);
  };
 
  const handleMinChange = (e) => {
  const value = Math.min(+e.target.value, maxAge - 1);
  setMinAge(value);
  };
 
  const handleMaxChange = (e) => {
    const value = Math.max(+e.target.value, minAge + 1);
    setMaxAge(value);
  };
 
  const styles = {
    sliderBox: {
      background: '#eaf6ff',
      padding: '20px',
      borderRadius: '15px',
    },
    ageLabels: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontWeight: 600,
    },
    rangeSlider: {
      position: 'relative',
      height: '40px',
    },
    rangeInput: {
      position: 'absolute',
      width: '100%',
      height: '40px',
      background: 'transparent',
      pointerEvents: 'auto',
      WebkitAppearance: 'none',
      appearance: 'none',
      top: 0,
      left: 0,
      margin: 0,
    },
    rangeValues: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '5px',
      fontWeight: 500,
    },
    buttonStyle: {
     
      border: 'none',
      color: '#333',
      borderRadius: '12px',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
    scrollRow: {
      overflowX: 'auto',
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '10px',
      paddingBottom: '8px',
    },
    rangeContainer: {
    position: 'relative',
    height: '40px',
    margin: '15px 0',
  },
 
  track: {
    position: 'absolute',
    top: '50%',
    left: '0',
    right: '0',
    height: '6px',
    backgroundColor: '#e0e0e0',
    borderRadius: '3px',
    transform: 'translateY(-50%)',
  },
 
  activeTrack: {
    position: 'absolute',
    top: '50%',
    height: '6px',
    backgroundColor: '#005a9c',
    borderRadius: '3px',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
 
  rangeInput: {
    position: 'absolute',
    width: '100%',
    height: '40px',
    background: 'transparent',
    pointerEvents: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    outline: 'none',
  }
  };
 
  return (
    <Modal show={show} onHide={onClose} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Filter Voters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Age Filter */}
       <div className="mb-4">
      <h6>Age Range</h6>
      <div style={styles.sliderBox}>
        <div style={styles.ageLabels}>
          <span>Min: {minAge}</span>
          <span>Max: {maxAge}</span>
        </div>
       
        {/* Slider Track Container */}
        <div style={styles.rangeContainer}>
          {/* Background Track */}
          <div style={styles.track}></div>
         
          {/* Active Range Highlight */}
          <div style={{
            ...styles.activeTrack,
            left: `${(minAge / 120) * 100}%`,
            width: `${((maxAge - minAge) / 120) * 100}%`,
          }}></div>
         
          {/* Min Age Thumb */}
          <input
            type="range"
            min="0"
            max={maxAge - 1}
            value={minAge}
            onChange={handleMinChange}
            style={{
              ...styles.rangeInput,
              zIndex: minAge > maxAge - 10 ? 3 : 2
            }}
          />
         
          {/* Max Age Thumb */}
          <input
            type="range"
            min={minAge + 1}
            max="120"
            value={maxAge}
            onChange={handleMaxChange}
            style={{
              ...styles.rangeInput,
              zIndex: 2
            }}
          />
        </div>
       
        <div style={styles.rangeValues}>
          <span>0</span>
          <span>120</span>
        </div>
      </div>
 
 
          {/* Thumb Styles */}
         <style>{`
              input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                background: transparent;
                pointer-events: auto;
              }
 
              input[type="range"]::-webkit-slider-thumb {
                pointer-events: all;
                width: 24px;
                height: 24px;
                background: #005a9c;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                -webkit-appearance: none;
                cursor: pointer;
                position: relative;
                z-index: 3;
                transition: all 0.1s ease;
              }
 
              input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.1);
              }
 
              input[type="range"]::-moz-range-thumb {
                pointer-events: all;
                width: 24px;
                height: 24px;
                background: #005a9c;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                cursor: pointer;
                transition: all 0.1s ease;
              }
 
              .scroll-row::-webkit-scrollbar {
                height: 6px;
              }
 
              .scroll-row::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 6px;
              }
            `}</style>
        </div>
 
        {/* Gender Filter - Horizontal Scroll */}
        <h6 className="mt-4 mb-2">Gender</h6>
        <div className="scroll-row" style={styles.scrollRow}>
          {[
            { label: 'Male', icon: '👨‍💼' },
            { label: 'Female', icon: '👩‍💼' },
            { label: 'Others', icon: '🧑' },
          ].map((g) => (
            <button
              key={g.label}
              onClick={() => setGender(g.label)}
              style={{
                ...styles.buttonStyle,
                backgroundColor:
                   gender === g.label ? 'rgba(9, 134, 230, 1)' : ' rgb(234, 246, 255)' ,
                color: gender === g.label ? '#fff' : 'rgba(0, 0, 0, 1)',
              }}
            >
              <span style={{ fontSize: '18px' }}>{g.icon}</span>
              {g.label}
            </button>
          ))}
        </div>
 
        {/* Voter History - Horizontal Scroll */}
        <h6 className="mt-4 mb-2">Voter History</h6>
        <div className="scroll-row" style={styles.scrollRow}>
          {['2024 PC', '2022 ULB', '2021 AC', 'No Vote'].map((h) => (
            <button
              key={h}
              onClick={() => toggleHistory(h)}
              style={{
                ...styles.buttonStyle,
                backgroundColor:
                   history === h.label ? 'rgba(9, 134, 230, 1)' : ' rgb(234, 246, 255)' ,
                color: history === h.label ? '#fff' : 'rgba(0, 0, 0, 1)',
              }}
            >
              {h}
            </button>
          ))}
        </div>
 
        {/* Voter Category - Horizontal Scroll */}
      <h6 className="mt-4 mb-2">Voter Category</h6>
        <div className="scroll-row" style={styles.scrollRow}>
          {historyIcons.map(({ icon, color }, index) => (
            <button
              key={index}
              onClick={() => toggleHistory(index)}
              style={{
                backgroundColor: history.includes(index) ? color : 'rgba(127, 131, 127, 0.1)',
                border: `3px solid ${color}`,
                borderRadius: '50%',
                paddingTop: '10px',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: history.includes(index)
                  ? `0 0 0 4px ${color}33` // subtle ring on selection
                  : '0 2px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontSize: '20px',
                  color: history.includes(index) ? '#fff' : color,
                  fontWeight: 'bold',
                }}
              >
                {icon}
              </span>
            </button>
          ))}
        </div>
          {/* political party */}
         <h6 className="mt-4 mb-2">Political Party</h6>
          <div className="scroll-row" style={styles.scrollRow}>
            {politicalParty.map(({ image, color }, index) => (
              <button
                key={index}
                onClick={() =>
                  setParty((prev) =>
                    prev.includes(index)
                      ? prev.filter((p) => p !== index)
                      : [...prev, index]
                  )
                }
                style={{
                  backgroundColor: party.includes(index)
                    ? color
                    : 'rgba(127, 131, 127, 0.1)',
                  border: `3px solid ${color}`,
                  borderRadius: '50%',
                  width: '14vw',          // responsive width
                  height: '14vw',         // responsive height
                  maxWidth: '50px',       // cap size for large screens
                  maxHeight: '50px',
                  minWidth: '35px',       // minimum size for tiny screens
                  minHeight: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: party.includes(index)
                    ? `0 0 0 4px ${color}33`
                    : '0 2px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  padding: 0,
                }}
              >
                <img
                  src={image}
                  alt={`Party ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: party.includes(index) ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>
 
            {/* Religion party */}
         <h6 className="mt-4 mb-2">Religion</h6>
          <div className="scroll-row" style={styles.scrollRow}>
            {Religion.map(({ image, color }, index) => (
              <button
                key={index}
           
                style={{
                  backgroundColor: religion.includes(index)
                    ? color
                    : 'rgba(127, 131, 127, 0.1)',
                  border: `3px solid ${color}`,
                  borderRadius: '50%',
                  width: '14vw',          // responsive width
                  height: '14vw',         // responsive height
                  maxWidth: '50px',       // cap size for large screens
                  maxHeight: '50px',
                  minWidth: '35px',       // minimum size for tiny screens
                  minHeight: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: party.includes(index)
                    ? `0 0 0 4px ${color}33`
                    : '0 2px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  padding: 0,
                }}
              >
                <img
                  src={image}
                  alt={`Religion ${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: party.includes(index) ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </button>
            ))}
          </div>
 
 
      </Modal.Body>
 
      <Modal.Footer className="justify-content-between">
        <Button variant="light" onClick={clearAll}>
          Clear All
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            onApply({ ageRange: [minAge, maxAge], gender, history, category })
          }
        >
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
 
export default TransFilterModal;
 
 
 