import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <button onClick={() => setCount(0)}>count - {count}</button>
      <button onClick={() => setCount(5)}>count - {count}</button>
    </div>
  );
};

export default UseState;
