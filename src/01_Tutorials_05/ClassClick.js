import React, { Component } from "react";

export class ClassClick extends Component {
  handleClick() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
