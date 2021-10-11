import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nayeem",
    };

    console.log("LifeCycle B Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle B componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle B componentDidUpdate");
  }

  render() {
    console.log("LifeCycle B render");
    return <div>Life Cycle B</div>;
  }
}

export default LifecycleB;
