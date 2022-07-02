import axios from 'axios';

const DISPLAY_ROCKET = './src/redux/rockets/rockets/DISPLAY_ROCKET';
const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const RESERVE_ROCKET = './src/redux/rockets/rockets/RESERVE_ROCKET';
const REMOVE_RESERVATION = './src/redux/rockets/rockets/REMOVE_RESERVATION';

const initialState = [];

export const displayRocket = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  const rocketData = response.data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  dispatch({
    type: DISPLAY_ROCKET,
    payload: rocketData,
  });
};

export const reserveRocket = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: RESERVE_ROCKET,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};
export const cancelReserve = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: REMOVE_RESERVATION,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
    case REMOVE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketReducer;
