import React from "react";

export const ChildTwo = ({ name }) => {
  console.log("ChildTwo render");
  return <div>ChildTwo Comp</div>;
};

export const MemoizedChild = React.memo(ChildTwo);
