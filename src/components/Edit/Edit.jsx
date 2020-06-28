// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation, useHistory } from "react-router";
// React Router DOM Imports:
import { Link } from "react-router-dom";
// Components Imports
import EditDetails from "../EditDetails/EditDetails";

// This component shows details of each movies and has buttons
const Details = () => {
  const location = useLocation();
  let history = useHistory();

  const handleBackClick = () => {
    history.push("/");
  }

  return (
    <>
      <h3>Make some edits</h3>
      <button onClick={handleBackClick}>Home</button>
      <EditDetails id={location.state.movieId} title={location.state.movieTitle} description={location.state.movieDescription} />
      <Link
        to={{
          pathname: "/details",
          state: {
            movieId: `${location.state.movieId}`,
            movieTitle: `${location.state.movieTitle}`,
            movieDescription: `${location.state.movieDescription}`,
          },
        }}
      >
        <button>Cancel</button>
      </Link>
    </>
  );
};

export default Details;