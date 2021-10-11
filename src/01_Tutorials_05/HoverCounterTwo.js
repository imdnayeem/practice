import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCounter}>
        hovered {this.props.count} times
      </h1>
    );
  }
}

export default HoverCounterTwo;
