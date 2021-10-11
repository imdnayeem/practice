import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hook Counter</h1>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </>
  );
}

export default HookCounter;
