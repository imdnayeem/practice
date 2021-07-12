import React, { Component } from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import Icon from "@material-ui/core/Icon";

class ClickCounter extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return <button onClick={handleIncrement}>Clicked {count} times</button>;
  }
}

export default ClickCounter;
