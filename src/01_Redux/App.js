import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "./App.css";

import CakeContainer from "./components/CakeContainer";

export const CountContext = React.createContext();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
