// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation, useHistory } from "react-router";
// React Router DOM Imports:
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
// Components Imports
import MovieGenres from "../MovieGenres/MovieGenres";

// This component shows details of each movies and has buttons
const Details = () => {
  const location = useLocation();
  let history = useHistory();

  const handleBackClick = () => {
    history.push("/");
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleBackClick}>
        Home
      </Button>
      <Link
        to={{
          pathname: "/edit",
          state: {
            movieId: `${location.state.movieId}`,
            movieTitle: `${location.state.movieTitle}`,
            movieDescription: `${location.state.movieDescription}`,
          },
        }}
      >
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Link>
      <h4>{location.state.movieTitle}</h4>
      <p>{location.state.movieDescription}</p>
      <MovieGenres movieTitle={location.state.movieTitle} />
    </>
  );
};

export default Details;