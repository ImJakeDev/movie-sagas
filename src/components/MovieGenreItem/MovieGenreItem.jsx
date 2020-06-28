// React Imports:
import React from "react";

const MovieGenreItem = (props) => {

  return (
    <div>
      {props.movieObj.genres.map((genre, index) => <p>{genre}</p>)}
    </div>
  );
};
// End of MovieGenreItem Component

export default MovieGenreItem;
