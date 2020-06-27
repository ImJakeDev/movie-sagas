const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET to movies database table
router.get("/", (req, res) => {
  // Return all movies
  const queryText = `SELECT * FROM movies ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
