// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation, useHistory } from "react-router";
// React Router DOM Imports:
import { Link } from "react-router-dom";

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
      <h4>{location.state.movieTitle}</h4>
      <input type='text'/>
      <p>{location.state.movieDescription}</p>
      <input type='text' />
      <button>Cancel</button>
      <button>Save</button>
    </>
  );
};

export default Details;