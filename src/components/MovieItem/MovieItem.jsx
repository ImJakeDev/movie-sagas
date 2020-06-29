// React Imports:
import React from "react";
// React Router DOM Imports:
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 480,
  },
});

const MovieItem = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6} sm={3}>
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
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.movieObj.poster}
              />
            </CardActionArea>
          </Card>
          {/* <img src={props.movieObj.poster} /> */}
        </Link>
      </Grid>
    </>
  );
};
// End of MovieItem Component

export default MovieItem;
