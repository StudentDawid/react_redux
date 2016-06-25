import { ADD_TO_CALC, REMOVE_FROM_CALC } from '../actions/index';

const INITIAL_STATE = { counter: 0 };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CALC:
      return { ...state, counter: state.counter + action.payload.number };
    case REMOVE_FROM_CALC:
      return { ...state, counter: state.counter - action.payload.number };
    default:
      return state;
  }
}
