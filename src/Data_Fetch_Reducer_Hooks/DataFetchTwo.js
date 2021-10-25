import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  post: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SUCCESS":
      return { ...state, loading: false, error: "", post: payload };
    case "FAILURE":
      return {
        ...state,
        loading: false,
        error: "something went wrong!!",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchTwo() {
  const [{ loading, error, post }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/22")
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FAILURE" });
      });
  }, []);

  return (
    <>
      <h2>DataFetchTwo</h2>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </>
  );
}

export default DataFetchTwo;
