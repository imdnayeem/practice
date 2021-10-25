import { useState } from "react";

function useCounter(initialState = 0, value = 1) {
  const [count, setCount] = useState(initialState);
  const decrement = () => {
    setCount((x) => x - value);
  };
  const reset = () => {
    setCount(initialState);
  };
  const increment = () => {
    setCount((x) => x + value);
  };
  return [count, decrement, reset, increment];
}

export default useCounter;
