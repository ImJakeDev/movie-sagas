// React Imports:
import React from "react";
// React Router DOM Imports:
import { HashRouter as Router, Route } from "react-router-dom";
// Components Imports
import MoviesList from "../MoviesList/MoviesList";
import Details from "../Details/Details";
import Edit from "../Edit/Edit";

// This component holds all the components of state that have different routes to them.
const Content = () => {
  return (
    <>
      <Router>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      </Router>
    </>
  );
};

export default Content;
