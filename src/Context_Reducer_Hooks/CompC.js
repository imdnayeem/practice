import React, { useContext } from "react";
import { CountContext } from "./App";
import CompE from "./CompE";

function CompC() {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>
      <CompE />
    </div>
  );
}

export default CompC;
