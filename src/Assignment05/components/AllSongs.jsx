import React from "react";
import SongsList from "./SongsList";
import SongsHeader from "./SongsHeader";
import axios from "axios";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AllSongs() {
  const [songsArray, setSongsArray] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3006/songsArray")
      .then((result) => {
        setSongsArray({ songsArray: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="style">
      <Router>
        <SongsHeader />
        <div className="ui main">
          <h4>Display Song info from the JSON Server</h4>
          <hr />
        </div>
        <div>
          <Link to="/" className="tab">
            Home
          </Link>
          <Link to="/about" className="tab">
            About
          </Link>
          <Link to="/songs" className="tab">
            Songs
          </Link>
          <Switch>
            <Route exact path="/" Link to="/"></Route>
            <Route path="/about" Link to="/about" component={About}></Route>
            <Route
              path="/songs"
              Link
              to="/songs"
              component={() => (
                <SongsList songsArray={songsArray["songsArray"]} />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
      <hr />
    </div>
  );
}

export default AllSongs;

// class AllSongs extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       songsArray: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3006/songsArray")
//       .then((result) => {
//         this.setState({ songsArray: result.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   handleSubmit = (value) => {
//     this.setState((pr) => ({ songsArray: [...pr.songsArray, value] }));
//   };

//   render() {
//     const { songsArray } = this.state;
//     return (
//       <div className="style">
//         <Router>
//           <SongsHeader />
//           <div className="ui main">
//             <h4>Display Song info from the JSON Server</h4>
//             <hr />
//           </div>
//           <div>
//             <Link to="/" className="tab">
//               Home
//             </Link>
//             <Link to="/about" className="tab">
//               About
//             </Link>
//             <Link to="/songs" className="tab">
//               Songs
//             </Link>
//             <Switch>
//               <Route exact path="/" Link to="/"></Route>
//               <Route path="/about" Link to="/about" component={About}></Route>
//               <Route
//                 path="/songs"
//                 Link
//                 to="/songs"
//                 component={() => (
//                   <SongsList
//                     songsList={songsArray}
//                     handleSubmit={this.handleSubmit}
//                   />
//                 )}
//               ></Route>
//             </Switch>
//           </div>
//         </Router>
//         <hr />
//       </div>
//     );
//   }
// }

// export default AllSongs;
