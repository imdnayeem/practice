import React from "react";

function FunctionClick() {
  function hanldeClick() {
    console.log("Clicked");
  }

  return (
    <div>
      <button onClick={hanldeClick()}>Click</button>
    </div>
  );
}

export default FunctionClick;
