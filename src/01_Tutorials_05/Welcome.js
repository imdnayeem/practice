import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, hero, children } = this.props;
    return (
      <div>
        <h1> Class Component </h1>
        <h2>{`This is ${name} a.k.a the ${hero}`}</h2>
        {children}
      </div>
    );
  }
}

export default Welcome;
