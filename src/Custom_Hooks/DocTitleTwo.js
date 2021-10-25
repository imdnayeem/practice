import React, { useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>{count}</button>
    </div>
  );
}

export default DocTitleTwo;
