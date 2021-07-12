import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return (
      <div>
        <h4 onMouseOver={handleIncrement}>Hovered {count} times</h4>
      </div>
    );
  }
}

export default HoverCounter;
