// React Imports:
import React from "react";
// React Router DOM Imports:
import { useLocation } from "react-router";

// This component shows details of each movies and has buttons
const Details = () => {
  const location = useLocation();
  return (
    <>
      <h3>Here are the deets.</h3>
      <h4>{location.state.movieTitle}</h4>
      <p>{location.state.movieDescription}</p>
    </>
  );
};

export default Details;

// componentWillMount() {
//   const location = useLocation();
//   this.props.dispatch({ type: "FETCH_GENRES", payload: `${location.state.movieTitle}` });
// }

// componentDidMount() {
//   const location = useLocation();
//   this.props.dispatch({ type: "FETCH_GENRES", payload: `${location.state.movieTitle}` });
// }
