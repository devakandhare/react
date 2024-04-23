we use useReducer hook to manage the state of the component.
it take first argument as reducer which is the function which take two arguments. first argument is the state and second argument is the action. action argument have one mandatory property called type. which we use to identify which action should perform.
second argument is the initial state. this hook return the updated state and dispatch function to dispatch the action which will change the state.

```js
const initialState = {todo: []};
function todoReducer(state, action) {
    switch(action.type) {
        "add": {
            state.todo = [...state.todo, action.payload];
            return state;
        },
        default: {
            return state;
        }
    }
}

const [state, dispatch] = useReducer(todoReducer, initialState);

// dispatching the action to update the state
dispatch({
    type: "add",
    payload: {
        id: 1,
        text: "this is another task"
    }
});

```
