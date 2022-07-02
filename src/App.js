import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './Components/Missions';
import Profiles from './Components/Rockects';
import Rockets from './Components/Rockects';
import { FetchMissions } from './redux/Missions/MissonSlice';
import { displayRocket, reserveRocket, cancelReserve } from './redux/rockets/rockets';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMissions());
  }, []);

  useEffect(() => {
    dispatch(displayRocket());
  }, []);
  const reserveRocketClick = (rocket) => {
    dispatch(reserveRocket(rocket));
  };
  const cancelReserveClick = (rocket) => {
    dispatch(cancelReserve(rocket));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rockets reserveRocketClick={reserveRocketClick} cancelReserveClick={cancelReserveClick} />} />
<<<<\
      </Routes>
    </div>
  );
}

export default App;
