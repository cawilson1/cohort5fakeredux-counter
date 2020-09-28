import { useReducer } from "react";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true
};

export function CreateStore(reducer) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function getState() {
    return { ...state };
  }

  return { getState, dispatch };
}
