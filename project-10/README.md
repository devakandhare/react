understanding that if value of variable change changes directly it does not cause to update the UI. To update the UI once varaible or state value changes we need to use special concept called react hooks. where we have state variable and updation function. when we update the state variable value through the setter function react casues the updation of UI.

```js
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const incrementCounter = () => {
    //counter = counter + 1;
    // console.log(counter);
    setCounter(counter + 1);
  };

  console.log("render again");
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementCounter}>Add Value</button>
      <button>Remove Value</button>
    </>
  );
}

export default App;
```

Here if we only use normal javascript variable then changes in state variable will not propogate to the UI. That why react provide way to propogate the changes in state variable to UI which is called hooks.
useState hook take single argument which is default or initial value for the state variable. it returns array with 2 variables first variable contains state of the variable and second variable is updater function. generally we destructer this array to use variable and setter function.
