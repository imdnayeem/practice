import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterTwo;
