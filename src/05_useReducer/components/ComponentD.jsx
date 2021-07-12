import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D {countContext.countState}
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
      <button onClick={() => countContext.countDispatch("incerement")}>
        +
      </button>
    </div>
  );
}

export default ComponentD;
