import React from "react";

export const ChildFive = ({ name, person }) => {
  console.log("ChildFive render");
  return (
    <div>
      ChildFive - {name} {person.fname} {person.lname}
    </div>
  );
};

export const MemoizedChildFive = React.memo(ChildFive);
