import React, { useState } from "react";
import { MemoizedChildFour } from "./Childfour";
import { MemoizedChild } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nayeem");
  console.log("ParentThree render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <button onClick={() => setName("Hanaa")}>{name}</button>
      {/* <MemoizedChild name={name}>
        <strong>Hello</strong>
      </MemoizedChild> */}
      <MemoizedChildFour name={name} />
    </div>
  );
};
