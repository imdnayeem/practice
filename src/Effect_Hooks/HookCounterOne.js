import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count {count}</button>
    </div>
  );
}

export default HookCounterOne;
