// React imports:
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// Index CSS import:
import "./index.css";
// Component import:
import App from "./components/App/App";
// Redux imports:
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
// Redux Saga imports:
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
// Axios Impot:
import axios from "axios";
// End of Imports

// Start of Sagas
// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchMovies);
  yield takeEvery("FETCH_GENRES", fetchGenres);
}
// fetchMovies saga retrieves movies from server
function* fetchMovies() {
  try {
    const response = yield axios.get('/api/movies');
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    alert(error);
  }
}
// fetchGenres saga retrieves movie genres for each movie from server
function* fetchGenres(action) {
  try {
    const movieTitle = action.payload;
    const response = yield axios.get(`/api/genres?ids=${movieTitle}`);
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    alert(error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// End of Sagas

// Start of Store Reducers
// Store Reducers:
// Used to store movies returned from the server
const movies = (state = null, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};
// End of Store Reducers

// Redux Store setup:
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  compose(
    // We have logger and saga middleware:
    applyMiddleware(sagaMiddleware, logger),
    // Redux Devtool:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// Window store thing for console:
window.store = storeInstance;

// React App:
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
