export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const INCREMENT_BY_N = "INCREMENT_BY_N";
export const DECREMENT_BY_N = "DECREMENT_BY_N";

export const UPDATE_N = "UPDATE_N";

export const ALLOW_INCREMENT_BY_N = "ALLOW_INCREMENT_BY_N";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}
export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementByN() {
  return {
    type: INCREMENT_BY_N
  };
}
export function decrementByN() {
  return {
    type: DECREMENT_BY_N
  };
}

export function updateN(n) {
  return {
    type: UPDATE_N,
    n: n
  };
}

export function allowIncrementByN() {
  return {
    type: ALLOW_INCREMENT_BY_N
  };
}
