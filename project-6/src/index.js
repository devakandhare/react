import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const initialState = { todo: [{ id: 1, text: "this is first task" }] };

function todoReducer(state, action) {
  switch (action.type) {
    case "add": {
      state.todo = [...state.todo, action.payload];
      return state;
    }
    case "delete": {
      state.todo = state.todo.filter((t) => t.id !== action.id);
      return state;
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  return (
    <>
      <h1>this is example of managing state using useReducer hook.</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "add",
            payload: { id: `${new Date().getTime()}`, text: task },
          });
          setTask("");
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <h4>List of tasks</h4>
      <ul>
        {state.todo.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
