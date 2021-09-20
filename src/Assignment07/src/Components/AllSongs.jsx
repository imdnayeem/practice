import React, { Component } from "react";
import SongsList from "./SongsList";
import "./styles.css";
import "./styles-custom.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

class AllSongs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songsArray: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3006/songsArray");
    this.setState({ songsArray: response.data });
  }

  handleSubmit = (value) => {
    this.setState((pr) => ({ songsArray: [...pr.songsArray, value] }));
    axios
      .post("http://localhost:3006/songsArray", value)
      .catch((err) => console.log(err.response.data));
  };

  render() {
    const { songsArray } = this.state;

    return (
      <>
        <h2>FED React : Assignment 2 : Multiple components and JSON</h2>
        <hr />
        <h5>{`Number of songs in the playlist : ${songsArray.length}`}</h5>
        <SongsList songsList={songsArray} handleSubmit={this.handleSubmit} />
        <hr />
      </>
    );
  }
}

export default AllSongs;
