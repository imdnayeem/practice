import React from "react";

export const ChildThree = ({ name, children }) => {
  console.log("ChildThree render");
  return (
    <div>
      ChildThree Comp {children} {name}
    </div>
  );
};

export const MemoizedChild = React.memo(ChildThree);
