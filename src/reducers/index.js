// src/reducers/index.js
import smallReducer from './smallReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    smallReducer,
});
export default rootReducer;
