

const FETCH_ROCKETS ='react-capstone1/rockets/FETCH_ROCKETS';

export const fetchedRockets = (payload) => {
 return {
   type: FETCH_ROCKETS, payload
 }
}



const RocketsReducer = () => {
  return (
    <div>RocketsReducer</div>
  )
}

export default RocketsReducer