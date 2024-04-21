import React from "react";
import ReactDOM from "react-dom/client";
import propTypes from "prop-types";
import "./index.scss";

function Header(props) {
  return <h1>{props.text}</h1>;
}

// define the type of text prop
Header.propType = {
  text: propTypes.string,
};

// render the application
function App() {
  return <Header text="This is react props example" />;
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
