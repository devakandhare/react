import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

    // setCount((prevCount) => prevCount + 1)
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

//
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
