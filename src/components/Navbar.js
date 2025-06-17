import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '1rem',
    background: '#fffbe6',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#5e3c58'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/gallery" style={linkStyle}>Gallery</Link>
      <Link to="/family-tree" style={linkStyle}>Family Tree</Link>
      <Link to="/stories" style={linkStyle}>Time Capsule</Link>
    </nav>
  );
}

export default Navbar;
