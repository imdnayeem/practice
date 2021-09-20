import React, {useRef} from 'react';

let currentId = 1;

// Presentation Component will not be dependent on a state mgmt lib
export const UserForm = (props) => {
  const refName = useRef(null);
  const refLocation = useRef(null);

  const onAddClick = () => {
    let user = {};
    user.id = currentId++;
    user.name = refName.current.value;
    user.location = refLocation.current.value;
    props.onAddUser(user);
  }

  return (
    <div>
      <span>Enter name: </span>
      <input type="text" ref={refName} /><br /><br />
      <span>Enter location: </span>
      <input type="text" ref={refLocation} /><br /><br />
      <button onClick={() => onAddClick()}>Add User</button>
    </div>
  );
}
