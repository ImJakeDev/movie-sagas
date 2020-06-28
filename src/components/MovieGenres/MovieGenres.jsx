// React Imports:
import React, { Component } from "react";
// Redux Imports:
import { connect } from "react-redux";

class MovieGenres extends Component {
  componentWillMount() {
    this.props.dispatch({ type: "FETCH_GENRES", payload: `${this.props.movieTitle}` });
  }

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_GENRES", payload: `${this.props.movieTitle}` });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.genres)}
      </div>
    );
  }
}
// End of MovieGenres Component

// Pull current state from Redux store
const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

export default connect(mapStateToProps)(MovieGenres);