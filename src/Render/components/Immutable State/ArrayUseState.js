import React, { useState } from "react";

const initState = ["Bruce", "Wayne"];

export const ArrayUseState = () => {
  const [person, setPerson] = useState(initState);
  const handleClick = () => {
    const newPerson = [...person];
    newPerson.push("Clark");
    newPerson.push("Kent");
    setPerson(newPerson);
  };
  console.log("ArrayUseState render");
  return (
    <>
      <div>
        <button onClick={handleClick}>click</button>
        {person.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>
    </>
  );
};
