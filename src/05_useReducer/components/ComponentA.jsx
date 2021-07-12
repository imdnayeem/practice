import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
      <button onClick={() => countContext.countDispatch("incerement")}>
        +
      </button>
    </div>
  );
}

export default ComponentA;
