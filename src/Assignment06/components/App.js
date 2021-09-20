import "./App.css";
import React from "react";
import AllSongs from "./AllSongs";
import { Provider } from "react-redux";
import store from "../redux/Store";
import "./styles.css";
import "./styles-custom.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="ui container">
        <AllSongs />
      </div>
    </Provider>
  );
}

export default App;
