import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, decrement, reset, increment] = useCounter(20, 5);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default CounterTwo;
