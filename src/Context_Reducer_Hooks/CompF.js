import React, { useContext } from "react";
import { CountContext } from "./App";

function CompF() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      Component F<div>{count}</div>
      <div>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>0</button>
        <button onClick={() => dispatch("increment")}>+</button>
      </div>
    </div>
  );
}

export default CompF;
