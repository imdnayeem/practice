import React from "react";
import UsersComponent from "./features/users/UsersComponent";

class App extends React.Component {
    render() {
        return <UsersComponent heading={"Demo of UserInfo - Using React Redux ( using connect )"}/>
    }
}

export default App;
