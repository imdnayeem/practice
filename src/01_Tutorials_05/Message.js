import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome visitor",
    };
  }

  handleClick() {
    this.setState({
      message: "Thanks for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.handleClick()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
