import React, { useEffect } from "react";
import SongsList from "./SongsList";
import SongsHeader from "./SongsHeader";
import AddSong from "./AddSong";
import "./App.css";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import "./styles-custom.css";
import NotFoundPage from "./NotFoundPage";
import SongInfo from "./SongInfo";

function AllSongs() {
  return (
    <>
      <Router>
        <SongsHeader />
        <hr />
        <div>
          <Link to="/" className="tab">
            Home
          </Link>
          <Link to="/about" className="tab">
            About
          </Link>
          <Link to="/products" className="tab">
            Products
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              Link
              to="/"
              component={() => (
                <>
                  <h2>Home Page</h2>
                </>
              )}
            ></Route>
            <Route
              exact
              path="/about"
              Link
              to="/about"
              component={About}
            ></Route>
            <Route
              exact
              path="/products"
              Link
              to="/products"
              component={() => <SongsList />}
            ></Route>
            <Route
              exact
              path="/products/addProduct"
              component={() => <AddSong />}
            ></Route>
            <Route path="/product/:productId" component={SongInfo} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
      <hr />
    </>
  );
}

export default AllSongs;
