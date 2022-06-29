const FETCH_ROCKETS = 'react-capstone1/rockets/FETCH_ROCKETS';

export const fetchedRockets = (payload) => ({
  type: FETCH_ROCKETS, payload,
});

const RocketsReducer = () => (
  <div>RocketsReducer</div>
);

export default RocketsReducer;
