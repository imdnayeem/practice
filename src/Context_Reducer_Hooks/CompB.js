import React, { useContext } from "react";
import { CountContext } from "./App";
import CompD from "./CompD";

function CompB() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <CompD />
    </div>
  );
}

export default CompB;
