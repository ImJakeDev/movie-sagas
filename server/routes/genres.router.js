const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET to genres database table
router.get("/", (req, res) => {
  // Return all genres from a specific movie
  console.log(req);
  
  const queryText = `
    SELECT "movies"."title", array_agg(name) AS genres
    FROM "movies"
    JOIN "movies_genres"
    ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres"
    ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."title" = ${movieTitle}
    GROUP BY "movies"."title";
  `;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
