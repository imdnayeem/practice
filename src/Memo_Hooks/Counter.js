import React, { useMemo, useState } from "react";

function Counter() {
  const initialState = 0;
  const [counterOne, setCounterOne] = useState(initialState);
  const [counterTwo, setCounterTwo] = useState(initialState);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const incrementOne = () => {
    setCounterOne((x) => x + 1);
  };
  const incrementTwo = () => {
    setCounterTwo((x) => x + 1);
  };

  return (
    <>
      <div>
        <button onClick={incrementOne}>count 1 - {counterOne}</button>
        <span> {isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>count 2 - {counterTwo}</button>
      </div>
    </>
  );
}

export default Counter;
