import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("fetched", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }, [idFromButtonClick]);
  return (
    <>
      <input
        type="number"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => setIdFromButtonClick(id)}>search</button>
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}

export default DataFetching;
