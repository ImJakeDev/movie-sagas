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
        <p>Here are the genres</p>
        {/* {JSON.stringify(this.props.genres[0])} */}
        {this.props.genres !== null ? (
          <div>
            {this.props.genres.map((movieObj, index) => (
              <div>{JSON.stringify(movieObj.genres)}</div>
            ))}
          </div>
        ) : (
            <p>Empty</p>
          )}
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