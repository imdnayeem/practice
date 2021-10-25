import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action) {
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("UseReducer render");
  return (
    <>
      {count}
      <div>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>0</button>
        <button onClick={() => dispatch("increment")}>+</button>
      </div>
    </>
  );
};
