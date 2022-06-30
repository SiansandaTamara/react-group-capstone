import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayRocket());
  }, []);
  return (
    <div className="row">
      <hr />
      {rockets.map((rocket) => (
        <div className="cardRock col-12" key={rocket.id}>
          <div className="row row2">
            <div className="rocketImg col-sm-3">
              <img src={rocket.flickr_images} alt="rocketImg" />
            </div>
            <div className="rockedata col-9">
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.description}</p>
              <button type="button" className="rockBtn">Reserve Rocket</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rockets;
