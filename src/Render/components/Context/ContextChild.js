import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("ChildA render");
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("ChildB render");
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};
export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("ChildC render");
  return (
    <>
      <div>ChildC - {count}</div>
    </>
  );
};
