import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input {...bindFirstName} type="text" />
        <label>Last Name</label>
        <input {...bindLastName} type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserForm;
