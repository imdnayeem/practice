import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          return value;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
