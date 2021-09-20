import React from 'react';

let currentId = 1;

// Presentation Component will not be dependent on a state mgmt lib
export default class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.refName = React.createRef(null);
    this.refLocation = React.createRef(null);
  }

  onAddClick() {
    let user = {};
    user.id = currentId++;
    user.name = this.refName.current.value;
    user.location = this.refLocation.current.value;
    this.props.onAddUser(user);
  }

  render() {
    return (
      <div>
        <span>Enter name: </span>
        <input type="text" ref={this.refName} /><br /><br />
        <span>Enter location: </span>
        <input type="text" ref={this.refLocation} /><br /><br />
        <button onClick={() => this.onAddClick()}>Add User</button>
      </div>
    );
  }
}
