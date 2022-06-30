
/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './mission.css';

/*eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, []);
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th>Missions</th>
            <th className="th">Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => <MissionCard key={mission.mission_id} mission={mission} />)
            missions.map((mission) => <id key={mission.mission_id} mission={mission} />)
          }
        </tbody>
      </table>
    </>
  );
};
export default Missions;
