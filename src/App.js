import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './Components/Missions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
