import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = document.getElementById("app");
const container = ReactDOM.createRoot(root);

function App() {
  return <h1>React Starter Project</h1>;
}

container.render(<App />);
