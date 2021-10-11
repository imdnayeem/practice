import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>
          click {this.props.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
