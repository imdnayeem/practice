import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h2 className="error">Modules Error</h2>
    </div>
  );
}

export default Inline;
