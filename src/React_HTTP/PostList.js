import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => this.setState({ error: "Error while fetching" }));
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h1>List of Posts</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default PostList;
