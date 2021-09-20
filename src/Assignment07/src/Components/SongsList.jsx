import React, { Component } from "react";
import "./styles.css";
import "./styles-custom.css";
import "semantic-ui-css/semantic.min.css";
import { Table } from "semantic-ui-react";
import axios from "axios";

class SongsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "",
      title: "",
      songlength: "",
      singer: "",
    };
  }

  handleChange = (event) => {
    switch (event.target.name) {
      case "movie":
        this.setState({ movie: event.target.value });
        break;
      case "title":
        this.setState({ title: event.target.value });
        break;
      case "songlength":
        this.setState({ songlength: event.target.value });
        break;
      case "singer":
        this.setState({ singer: event.target.value });
        break;
      default:
        break;
    }
  };

  handleAdd = () => {
    this.props.handleSubmit(this.state);
    this.setState({
      movie: "",
      title: "",
      songlength: "",
      singer: "",
    });
  };

  render() {
    const { songsList } = this.props;
    const { movie, title, songlength, singer } = this.state;
    return (
      <>
        <h3>Songs List</h3>
        <Table celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Movie</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Song Length</Table.HeaderCell>
              <Table.HeaderCell>Singer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {songsList.map((data, id) => {
              return (
                <Table.Row key={id}>
                  <Table.Cell>{data.movie}</Table.Cell>
                  <Table.Cell>{data.title}</Table.Cell>
                  <Table.Cell>{data.songlength}</Table.Cell>
                  <Table.Cell>{data.singer}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <hr />
        <div>
          <label> Movie Name </label>
          <input
            type="text"
            value={movie}
            name="movie"
            onChange={this.handleChange}
          />
          <label> Song Title </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
          <label> Song Length </label>
          <input
            type="text"
            value={songlength}
            name="songlength"
            onChange={this.handleChange}
          />
          <label> Singer </label>
          <input
            type="text"
            value={singer}
            name="singer"
            onChange={this.handleChange}
          />
        </div>
        <button className="button" onClick={this.handleAdd}>
          Add
        </button>
      </>
    );
  }
}

export default SongsList;
