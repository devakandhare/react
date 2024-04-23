import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

function App() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const formRef = useRef();

  const [fullname, setFullname] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(firstnameRef.current);
    // get the value of firstname and lastname field
    const firstName = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;

    setFullname(firstName + " " + lastname);
    formRef.current.reset();
  };

  return (
    <>
      <h3>this is useRed example for uncontrolled component</h3>
      <form onSubmit={formSubmitHandler} ref={formRef}>
        <label htmlFor="firstname">
          Firstname
          <input id="firstname" type="text" ref={firstnameRef} max={15} />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input id="lastname" type="text" ref={lastnameRef} max={15} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h3>User fullname : {fullname}</h3>
    </>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
