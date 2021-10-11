import React from "react";

import "./App.css";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import { SharedStateProvider } from "./store";

function App() {
  return (
    <>
      <SharedStateProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            border: "1px solid black",
          }}
        >
          <Counter1 />
          <Counter2 />
        </div>
      </SharedStateProvider>
    </>
  );
}

export default App;
