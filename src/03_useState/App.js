import "./App.css";
import Button from "@material-ui/core/Button";

import HookCounter from "./components/HookCounter";
import HookcounterTwo from "./components/HookcounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterOne from "./components/HookCounterOne";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookcounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
