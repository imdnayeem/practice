import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} from {person.address.city} and my email id is{" "}
        {person.email}
      </h2>
    </div>
  );
}

export default Person;
