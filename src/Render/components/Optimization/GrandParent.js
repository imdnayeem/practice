import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  console.log("GrandParent render");
  return (
    <>
      <div>
        <button onClick={() => setNewCount((x) => x + 1)}>
          Grant Parent - {newCount}
        </button>
      </div>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </>
  );
};
