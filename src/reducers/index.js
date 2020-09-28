import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  INCREMENT_BY_N,
  DECREMENT_BY_N,
  ALLOW_INCREMENT_BY_N
} from "../actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case UPDATE_N:
      return { ...state, n: action.n };
    case INCREMENT_BY_N:
      return { ...state, counter: state.counter + state.n };
    case DECREMENT_BY_N:
      return { ...state, counter: state.counter - state.n };
    case ALLOW_INCREMENT_BY_N:
      return { ...state, allowed: !state.allowed };
    default:
      return state;
  }
};
