import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((x) => {
      return { count: x.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCounter)}</div>
    );
  }
}

export default Counter1;
