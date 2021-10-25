import React, { useContext } from "react";
import { CountContext } from "./App";

function CompD() {
  const { count, dispatch } = useContext(CountContext);

  return <div>Component D</div>;
}

export default CompD;
