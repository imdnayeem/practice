import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.name} clicked {this.props.count} times
      </button>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5);
