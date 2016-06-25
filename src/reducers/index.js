import { combineReducers } from 'redux';
import CalcReducer from './calc';

const rootReducer = combineReducers({
  calc: CalcReducer
});

export default rootReducer;
