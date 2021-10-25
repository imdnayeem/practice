import React from "react";
import "./App.css";
import CompC from "./CompC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Nayeem"}>
        <ChannelContext.Provider value={"Hanaa"}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
