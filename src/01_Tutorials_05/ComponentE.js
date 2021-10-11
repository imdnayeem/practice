import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <div>Component E context {this.context}</div>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
