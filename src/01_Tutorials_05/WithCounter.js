import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleClick = () => {
      this.setState((x) => {
        return { count: x.count + incrementNumber };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
