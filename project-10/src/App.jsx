import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const incrementCounter = () => {
    //counter = counter + 1;
    // console.log(counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      counter = counter - 1;
    }

    setCounter(counter);
  };

  console.log("render again");
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementCounter}>Add Value</button>
      <button onClick={decrementCounter}>Remove Value</button>
    </>
  );
}

export default App;
