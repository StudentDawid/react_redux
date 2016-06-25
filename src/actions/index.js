export const ADD_TO_CALC = 'ADD_TO_CALC';
export const REMOVE_FROM_CALC = 'REMOVE_FROM_CALC';

export function addCalc(number) {
  return {
    type: ADD_TO_CALC,
    payload: {
      number
    }
  };
}

export function removeCalc(number) {
  return {
    type: REMOVE_FROM_CALC,
    payload: {
      number
    }
  };
}
