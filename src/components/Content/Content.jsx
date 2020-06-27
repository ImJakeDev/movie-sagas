import React from "react";

import MoviesList from "../MoviesList/MoviesList";

// This component holds all the componets of state that have different routes to them.
const Content = () => {
  return (
    <>
      <h1>Here are the movies:</h1>
      <MoviesList/>
    </>
  );
};

export default Content;
