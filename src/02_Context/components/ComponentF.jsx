import React from "react";
import { UserConsumer } from "./UserContext";

function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {(username) => {
          return <div> {`Hello ${username}`}</div>;
        }}
      </UserConsumer>
    </div>
  );
}

export default ComponentF;
