we use useState hook from React to handle the state for the component.
first we declare and initialize the state variable using useState hook

```jsx
const [count, setCount] = useState("");
```

count is the state variable
setCount is update function for the state variable
we cannot directly update the state variable value, we need to use setCount updater method to update the value. there are 2 variants for updating value

1. it accepts value directly
2. accepts function which have prevState as argument which contains current state of the state variable and then it returns updated value.
