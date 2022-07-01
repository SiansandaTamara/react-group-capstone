import {
  applyMiddleware, compose, combineReducers, createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from 'missions/MissionSlice';
import rocketReducer from './rockets/rockets';

const rootReducers = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducers, compose(applyMiddleware(thunk, logger)));

export default store;
