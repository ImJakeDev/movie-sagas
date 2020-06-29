// React Imports:
import React, { Component } from "react";
// Redux Imports:
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Components Imports
import MovieItem from "../MovieItem/MovieItem";

const styles = (theme) => ({
  root: {
    
  },
});

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.movies !== null ? (
          <Grid container spacing={3}>
            {this.props.movies.map((movieObj, index) => (
              <MovieItem key={index + movieObj} movieObj={movieObj} />
            ))}
          </Grid>
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

export default connect(mapStateToProps)(withStyles(styles)(MoviesList));
