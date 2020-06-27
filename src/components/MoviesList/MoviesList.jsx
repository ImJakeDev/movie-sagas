// React Imports:
import React, { useState } from "react";
// Redux Imports:
import { connect } from "react-redux";

import MovieItem from "../MovieItem/MovieItem";

// This component will display a list of movies taken from the server and database
// using redux global state and dispatching to sagas
const MoviesList = () => {

  const [moviesArr] = useState([1, 2, 3]);

  return (
    <>
      {moviesArr.map((movieObj, index) => (
        <MovieItem key={index,movieObj} movieObj={movieObj} />
      ))}
    </>
  );
};
// End of MoviesList Component

// Pull current state from Redux store
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesList);
