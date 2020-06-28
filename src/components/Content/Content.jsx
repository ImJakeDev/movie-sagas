// React Imports:
import React from "react";
// React Router DOM Imports:
import { HashRouter as Router, Route } from "react-router-dom";
// Components Imports
import MoviesList from "../MoviesList/MoviesList";
import Details from "../Details/Details";

// This component holds all the componets of state that have different routes to them.
const Content = () => {
  return (
    <>
      <Router>
        <h1>Here are the movies:</h1>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
      </Router>
    </>
  );
};

export default Content;
