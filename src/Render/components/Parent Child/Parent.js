import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <button onClick={() => setCount(0)}>count - {count}</button>
      <button onClick={() => setCount(5)}>count - {count}</button>
      <Child />
    </div>
  );
};
