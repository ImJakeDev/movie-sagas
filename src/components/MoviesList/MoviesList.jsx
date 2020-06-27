// React Imports:
import React, { Component } from "react";
// Redux Imports:
import { connect } from "react-redux";

import MovieItem from "../MovieItem/MovieItem";

// This component will display a list of movies taken from the server and database
// using redux global state and dispatching to sagas
class MoviesList extends Component {
  componentWillMount() {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  }

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  }

  render() {
    return (
      <div>
        {this.props.movies !== null ? (
          <div>
            {this.props.movies.map((movieObj, index) => (
              <MovieItem key={index + movieObj} movieObj={movieObj} />
            ))}
          </div>
        ) : (
          <p>Empty</p>
        )}
      </div>
    );
  }
}
// End of MoviesList Component

// Pull current state from Redux store
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesList);
