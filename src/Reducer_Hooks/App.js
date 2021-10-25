import React from "react";
import "./App.css";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
import CounterOne from "./CounterOne";
import CounterThree from "./CounterThree";
import CounterTwo from "./CounterTwo";

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <CompA />
      <CompB />
      <CompC />
    </div>
  );
}

export default App;
