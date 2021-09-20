import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then((res) => setUserData(JSON.stringify(res.data, null, 2)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <button onClick={incrementCount}>{count}</button>
      <pre>{userData}</pre>
    </div>
  );
}

export default App;
