import React, { useReducer } from "react";
import "./App.css";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const INCREMENT_BY_N = "INCREMENT_BY_N";
const DECREMENT_BY_N = "DECREMENT_BY_N";

const UPDATE_N = "UPDATE_N";

function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}
function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
}

function incrementByN() {
  return {
    type: INCREMENT_BY_N
  };
}
function decrementByN() {
  return {
    type: DECREMENT_BY_N
  };
}

function updateN(n) {
  return {
    type: UPDATE_N,
    n: n
  };
}

const reducer = (state, action) => {
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

const initialState = {
  counter: 0,
  n: 0
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
          <button onClick={() => dispatch(incrementByN())}>
            Increment By N
          </button>
          <button onClick={() => dispatch(decrementByN())}>
            Decrement By N
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
