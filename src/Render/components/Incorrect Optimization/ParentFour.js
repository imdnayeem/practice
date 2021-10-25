import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nayeem");
  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };
  const handleClick = () => {};
  const memoizedPerson = useMemo(() => person, []);
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour render");
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>count - {count}</button>
      <button onClick={() => setName("Hanaa")}>{name}</button>
      <MemoizedChildFive
        name={name}
        person={memoizedPerson}
        handleClick={memoizedHandleClick}
      />
    </div>
  );
};
