import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: true,
    };
  }

  //   componentDidMount() {
  //     setInterval(
  //       () =>
  //         this.setState((prevState) => ({
  //           name: !prevState.name,
  //         })),
  //       2000
  //     );
  //   }

  render() {
    console.log("****ParentComp render****");
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
