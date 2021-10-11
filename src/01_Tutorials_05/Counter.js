import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
  }
  decrement() {
    this.setState((prevState, props) => ({ count: prevState.count - 1 }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.setState({ count: 0 })}> reset </button>
        <button onClick={() => this.incrementFive()}>+</button>
      </div>
    );
  }
}

export default Counter;
