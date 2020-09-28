import React, { useReducer } from "react";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  updateN,
  incrementByN,
  decrementByN,
  allowIncrementByN
} from "./actions";
import { reducer } from "./reducers";

const initialState = {
  counter: 0,
  n: 0,
  allowed: true
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.counter}</div>
        <div>
          <div>
            <button onClick={() => dispatch(incrementCounter())}>
              Increment
            </button>
            <button onClick={() => dispatch(decrementCounter())}>
              Decrement
            </button>
          </div>
        </div>
        <div>
          <label>Number to increment By</label>
          <input
            onChange={event => dispatch(updateN(Number(event.target.value)))}
          />
          <br />
          <button
            onClick={() => dispatch(incrementByN())}
            disabled={!state.allowed}
          >
            Increment By N
          </button>
          <button
            onClick={() => dispatch(decrementByN())}
            disabled={!state.allowed}
          >
            Decrement By N
          </button>
        </div>
        <button onClick={() => dispatch(allowIncrementByN())}>
          {state.allowed ? "Disable In/Decrement" : "Enable In/Decrement"}
        </button>
      </header>
    </div>
  );
}

export default App;
