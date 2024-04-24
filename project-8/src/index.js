import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

function App() {
  const [fullname, setFullname] = useState("");
  const formRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  // focus firstname input when component mount
  useEffect(() => {
    firstnameRef.current.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFullname(firstnameRef.current.value + " " + lastnameRef.current.value);
    formRef.current.reset();
  };

  return (
    <>
      <h1>useRef hook to focus the element</h1>
      <form onSubmit={handleFormSubmit} ref={formRef}>
        <label htmlFor="firstname">
          Firstname
          <input id="firstname" ref={firstnameRef} />
        </label>
        <label>
          Lastname
          <input id="lastname" ref={lastnameRef} />
        </label>
        <button type="submit">submit</button>
      </form>
      <h4>fullname : {fullname}</h4>
    </>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
