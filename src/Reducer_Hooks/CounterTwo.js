import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{count.firstCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>0</button>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          +5
        </button>
      </div>
      <div>{count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>0</button>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          +5
        </button>
      </div>
    </>
  );
}

export default CounterTwo;
