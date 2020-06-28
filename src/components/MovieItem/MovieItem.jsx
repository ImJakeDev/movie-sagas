// React Imports:
import React from "react";
// React Router DOM Imports:
// import { useHistory } from "react-router-dom";
// React Router DOM Imports:
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  // let history = useHistory();

  // const handleClick = () => {
  //   history.push('/details');
  // }

  return (
    <div>
      <Link
        to={{
          pathname: "/details",
          state: {
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
