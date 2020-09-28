import React from "react";
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
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  console.log(store.getState());
  return (
    <div className="App">
      <header className="App-header">
        <div>{store.getState().counter}</div>
        <div>
          <div>
            <button onClick={() => store.dispatch(incrementCounter())}>
              Increment
            </button>
            <button onClick={() => store.dispatch(decrementCounter())}>
              Decrement
            </button>
          </div>
        </div>
        <div>
          <label>Number to increment By</label>
          <input
            onChange={event =>
              store.dispatch(updateN(Number(event.target.value)))
            }
          />
          <br />
          <button
            onClick={() => store.dispatch(incrementByN())}
            disabled={!store.getState().allowed}
          >
            Increment By N
          </button>
          <button
            onClick={() => store.dispatch(decrementByN())}
            disabled={!store.getState().allowed}
          >
            Decrement By N
          </button>
        </div>
        <button onClick={() => store.dispatch(allowIncrementByN())}>
          {store.getState().allowed
            ? "Disable In/Decrement"
            : "Enable In/Decrement"}
        </button>
      </header>
    </div>
  );
}

export default App;
