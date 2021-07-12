import React, { useState } from "react";

function HookcounterTwo() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <div>
        <h2>Your First Name is : {name.firstName}</h2>
      </div>
      <div>
        <h2>Your Last Name is : {name.lastName}</h2>
      </div>
    </div>
  );
}

export default HookcounterTwo;
