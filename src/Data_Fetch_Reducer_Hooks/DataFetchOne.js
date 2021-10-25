import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/22")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("something is wrong");
      });
  }, []);
  return (
    <>
      <h2>DataFetchOne</h2>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </>
  );
}

export default DataFetchOne;
