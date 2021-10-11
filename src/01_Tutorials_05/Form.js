import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  handleUserNameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };
  handleTopicChange = (e) => {
    this.setState({ topic: e.target.value });
  };
  handleSubmit = (e) => {
    alert(
      `I am ${this.state.username}, and i have written ${this.state.comments}, and i am interested in ${this.state.topic}`
    );
    e.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <lable>Comments</lable>
          <textarea
            type="text"
            value={comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
