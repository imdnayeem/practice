import React from "react";
import "./App.css";
import DataFetching from "./DataFetching";
import HookCounterOne from "./HookCounterOne";
import HookMouse from "./HookMouse";
import IntervalHookCounter from "./IntervalHookCounter";
import MouseContainer from "./MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
