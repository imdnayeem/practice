import React from "react";
import { useSharedState } from "./store";

function Counter1() {
  const [state, setState] = useSharedState();

  const increment = () => {
    setState((prev) => ({ ...prev, count1: prev.count1 + 1 }));
  };

  return (
    <div>
      {state.count1}
      {console.log("render counter 1")}
      <button onClick={increment}>Increment Count 1</button>
    </div>
  );
}

export default Counter1;
