import { combineReducers } from 'redux';
import toppingsReducer from './toppingsReducer';
import pizzasReducer from './pizzasReducer';

export default combineReducers({
    toppingsReducer,
    pizzasReducer
});