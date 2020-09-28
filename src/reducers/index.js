import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  INCREMENT_BY_N,
  DECREMENT_BY_N,
  ALLOW_INCREMENT_BY_N
} from "../actions";

const incrementerReducer = (state = { counter: 0, n: 0 }, action) => {
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
    default:
      return state;
  }
};

const allowerReducer = (
  state = {
    allowed: true
  },
  action
) => {
  switch (action.type) {
    case ALLOW_INCREMENT_BY_N:
      return { ...state, allowed: !state.allowed };
    default:
      return state;
  }
};

export function rootReducer(state = {}, action) {
  return {
    incrementers: incrementerReducer(state.incrementers, action),
    allowers: allowerReducer(state.allowers, action)
  };
}
