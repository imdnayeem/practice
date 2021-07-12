import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "incerement":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("decrement")}> - </button>
      <button onClick={() => dispatch("reset")}> Reset</button>
      <button onClick={() => dispatch("incerement")}> + </button>
      <div>{countTwo}</div>
      <button onClick={() => dispatchTwo("decrement")}> - </button>
      <button onClick={() => dispatchTwo("reset")}> Reset</button>
      <button onClick={() => dispatchTwo("incerement")}> + </button>
    </div>
  );
}

export default Counter3;
