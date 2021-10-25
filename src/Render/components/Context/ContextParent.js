import React, { createContext, useContext, useState } from "react";
import { MemoizedChildA } from "./ContextChild";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ContextParent render");

  return (
    <>
      <div>ContextParent</div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <CountProvider value={count}>{children}</CountProvider>
    </>
  );
};
