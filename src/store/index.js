import { useReducer } from "react";

export function CreateStore(reducer) {
  const [state, dispatch] = useReducer(reducer, reducer(undefined, ""));
  function getState() {
    return { ...state };
  }

  return { getState, dispatch };
}
