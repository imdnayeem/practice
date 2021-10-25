import React, { useState } from "react";
import { MemoizedChild } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nayeem");
  console.log("ParentTwo render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <button onClick={() => setName("Hanaa")}>{name}</button>
      <MemoizedChild name={name} />
    </div>
  );
};
