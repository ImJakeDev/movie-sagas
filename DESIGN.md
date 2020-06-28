# Project design ideas, tasks, and thoughts:

1. Server routers, HTTP request to database
  - How many routers to I need?
  - What are my HTTPs going to look like?
    - movies.router.js:
      - Has a GET from the saga and a GET to the database with a query asking the database for movies
        - 'SELECT * FROM "movies";' -> gives me everything from movies table: [{movie1}, {movie2},...]
      - Has a PUT from the saga and a PUT to the database updating the specific movie id with a query asking the database to change an "element" from the request.body
        - might need multiples depending on the edit functionality... 
    - genres.router.js:
      - I honestly am not sure how to connect the genres to each individual movie right now. 
      - I have a query to get the genres of every movie
      - I might be able to dispatch the HTTP with a title variable based on the component and then send the variable with the query to get the correct genres of that movie.
      - Seems doable...
        - url: 'somesite.com/models/thing?ids=1,2,3'
        - Query: SELECT "movies"."title", array_agg(name) AS genres FROM "movies" JOIN "movies_genres" ON "movies" "id" = "movies_genres"."movie_id" JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id" WHERE "movies" "title" = 'Beauty and the Beast' GROUP BY "movies"."title";

2. Index.js ->
  - Holds Sagas and reducers
    * all could be organized in folders fro file system organization
  - What might the reducers look like:
    - movies (reducer):
      - holds the global state of an array list of objects that represent the movies from the database
    - genres (reducer):
      - holds the global state of an array list of strings that represent the genres from the database
  - What might the sagas look like:
    - 'FETCH_MOVIES' (saga):
      - this saga will call a HTTP get to the server after catching a dispatch from client and pass a 'put' with a payload to the movies reducer