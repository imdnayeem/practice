import React from "react";

function Count({ text, count }) {
  console.log(`rendering Count - ${text} , ${count}`);
  return (
    <>
      {text} - {count}
    </>
  );
}

export default React.memo(Count);
