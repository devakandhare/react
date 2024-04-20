import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
function App() {
  return <h1>We have added configuration for react working with scss files</h1>;
}

root.render(<App />);
