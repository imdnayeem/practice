import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incerement":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "incerement2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
      <button onClick={() => dispatch({ type: "incerement", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "incerement", value: 5 })}>
        +5
      </button>
      <div>{count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
      <button onClick={() => dispatch({ type: "incerement2", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "incerement2", value: 5 })}>
        +5
      </button>
    </div>
  );
}

export default Counter2;
