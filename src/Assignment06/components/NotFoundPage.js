import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <h1>Opps!!</h1>
        <p>The requested page was not found.</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </>
    );
  }
}
