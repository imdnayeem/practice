import React, { useState } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount((x) => x - 1)}>-</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount((x) => x + 1)}>+</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
