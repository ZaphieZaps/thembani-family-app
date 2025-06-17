import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import FamilyTree from './pages/FamilyTree';
import Stories from './pages/Stories';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/family-tree" element={<FamilyTree />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

