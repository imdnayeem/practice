import React, { useState } from "react";

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  );
}

export default HookCounter;
