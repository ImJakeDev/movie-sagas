// React Imports:
import React from "react";
// React Router DOM Imports:
import { Link } from "react-router-dom";

const MovieItem = (props) => {

  return (
    <div>
      <Link
        to={{
          pathname: "/details",
          state: {
            movieId: `${props.movieObj.id}`,
            movieTitle: `${props.movieObj.title}`,
            movieDescription: `${props.movieObj.description}`,
          },
        }}
      >
        <img src={props.movieObj.poster} />
      </Link>
      {/* <h4>{props.movieObj.title}</h4>
      <p>{props.movieObj.description}</p> */}
    </div>
  );
};
// End of MovieItem Component

export default MovieItem;
