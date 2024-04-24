import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const reacElement = React.createElement(
  "a",
  { href: "https://google.com", target: "__blank" },
  "open this link"
);

ReactDOM.createRoot(document.getElementById("root")).render(reacElement);
