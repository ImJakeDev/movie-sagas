// React Imports:
import React from "react";

const MovieItem = (props) => {
  return (
    <div>
      <hr/>
      <img src={props.movieObj.poster}/>
      <h4>{props.movieObj.title}</h4>
      <p>{props.movieObj.description}</p>
      <hr />
    </div>);
};
// End of MovieItem Component

export default MovieItem;
