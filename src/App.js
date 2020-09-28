import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
