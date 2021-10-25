import React, { useState } from "react";

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ParentOne render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      {children}
    </div>
  );
};
