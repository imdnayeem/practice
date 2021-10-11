import React from "react";
import { useSharedState } from "./store";

function Counter2() {
  const [state, setState] = useSharedState();

  const increment = () => {
    setState((prev) => ({ ...prev, count2: prev.count2 + 1 }));
  };

  return (
    <div>
      {state.count2}
      {console.log("render counter 2")}
      <button onClick={increment}>Increment Count 2</button>
    </div>
  );
}

export default Counter2;
