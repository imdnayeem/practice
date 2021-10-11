import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.handleClick}>
        hovered {this.props.count} times
      </h1>
    );
  }
}

export default UpdatedComponent(HoverCounter, 10);
