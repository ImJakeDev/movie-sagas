// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation, useHistory } from "react-router";
// React Router DOM Imports:
import { Link } from "react-router-dom";
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
      <h3>Here are the deets.</h3>
      <button onClick={handleBackClick}>Home</button>
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
        <button>Edit</button>
      </Link>
      <h4>{location.state.movieTitle}</h4>
      <p>{location.state.movieDescription}</p>
      <MovieGenres movieTitle={location.state.movieTitle}/>
    </>
  );
};

export default Details;