const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET to movies database table
router.get("/", (req, res) => {
  // Return all movies
  const queryText = `SELECT * FROM movies ORDER BY title ASC`;
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

// PUT to movies database table
router.put("/", (req, res) => {
  const movie = req.body;
  console.log(movie);
  const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "movies"."id" = $3`;
  const queryValues = [movie.title, movie.description, movie.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      console.log(result.rows);
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
