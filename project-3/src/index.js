import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function App() {
  return (
    <>
      <h1>React configure fonts and images</h1>
      <div className="react-logo"></div>
    </>
  );
}

root.render(<App />);
