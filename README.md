# Movie Sagas

## Description

Movie Sagas is a project built in Full stack and displays a list of movie poster that you can edit when clicked on and see more information.

## Installation

1. Create a database named `saga_movies_weekend`.
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`.
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. The `npm run client` command will open up a new browser tab for you!
4. If you would just like to run the build version run `npm start` and it will compile the whole project into a finished build and a run the server.

## Usage

- The user clicks on the poster
- That will bring the user to the details page for that specific movie
- There are options to either go back or edit said movie
- If user edits the movie that will bring them to the edit page and the user can then edit the movie's info
- Right now there is a bug when the user clicks save to mind that... ;)

## Built With

* Love <3 (and sadness at times when bugs are around)
* JavaScript!
  * NodeJS
  * ExpressJS
  * PG
  * AxiosJS
  * ReactJS
    * React Redux
    * React Router DOM
* And maybe a few other things...

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)