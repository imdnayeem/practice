import React from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterOne;
