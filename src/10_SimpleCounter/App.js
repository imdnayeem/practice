import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    axios
      // .get(`https://randomuser.me/api?page=${count}`)
      .get(`https://randomuser.me/api?results=${count}`)
      .then((res) => {
        if (res === undefined) return;
        const newData = [
          ...userData,
          res.data.results.map((res, id) => (
            <div key={id}>
              <pre>
                {res.name.last} {res.name.first}
              </pre>
              <img src={res.picture.thumbnail} alt="thumbnail" />
            </div>
          )),
        ];
        setUserData(newData);
      })
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <div className="App">
      <button onClick={incrementCount}>next 2 users</button>
      <pre>{userData}</pre>
    </div>
  );
}

export default App;
