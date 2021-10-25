import React, { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComp() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((x) => x + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((x) => x + 1000);
  }, [salary]);

  return (
    <>
      <h3>Parent Component</h3>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}

export default ParentComp;
