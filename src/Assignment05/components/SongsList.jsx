import React from "react";
import { Table } from "semantic-ui-react";

const SongsList = (props) => {
  const SemanticTable = (props) => (
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
        {props.songsArray.map((data) => {
          return (
            <Table.Row>
              <Table.Cell key={data.id}>{data.movie}</Table.Cell>
              <Table.Cell key={data.id}>{data.title}</Table.Cell>
              <Table.Cell key={data.id}>{data.songlength}</Table.Cell>
              <Table.Cell key={data.id}>{data.singer}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );

  return (
    <>
      <h2>Songs List using Functional Component</h2>
      <h4>{`Number of songs in the playlist : ${props.songsArray.length}`}</h4>
      {SemanticTable(props)}
    </>
  );
};

export default SongsList;
