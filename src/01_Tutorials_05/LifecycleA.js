import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nayeem",
    };

    console.log("LifeCycle A Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({ name: "Hanaa" });
  };

  render() {
    console.log("LifeCycle A render");
    return (
      <div>
        <div>Life Cycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
