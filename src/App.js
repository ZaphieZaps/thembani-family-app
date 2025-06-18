import React from 'react';
import './App.css';
import backgroundImage from './assets/bg-thembani.png.png';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import FamilyTree from './pages/FamilyTree';
import Stories from './pages/Stories';

const appStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
};

function App() {
  return (
    <div style={appStyle}>
      <div className="overlay" />
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/family-tree" element={<FamilyTree />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



