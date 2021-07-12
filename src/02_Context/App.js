import "./App.css";
import Button from "@material-ui/core/Button";

import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value={"Nayeem"}>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
