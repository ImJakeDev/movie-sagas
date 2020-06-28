// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation } from "react-router";
// Components Imports
import MovieGenres from "../MovieGenres/MovieGenres";

// This component shows details of each movies and has buttons
const Details = () => {
  const location = useLocation();
  return (
    <>
      <h3>Here are the deets.</h3>
      <h4>{location.state.movieTitle}</h4>
      <p>{location.state.movieDescription}</p>
      <MovieGenres movieTitle={location.state.movieTitle}/>
    </>
  );
};

export default Details;