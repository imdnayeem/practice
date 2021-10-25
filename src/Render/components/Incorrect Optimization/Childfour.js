import React from "react";

export const Childfour = ({ name }) => {
  const date = new Date();
  console.log("Childfour render");
  return (
    <div>
      Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(Childfour);
