// React imports:
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// Index CSS import:
import "./index.css";
// Component import:
import App from "./components/App/App.js";
// Redux imports:
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
// Redux Saga imports:
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
// Axios Impot:
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Store Reducers:
// Used to store movies returned from the server
const movies = (state = [], action) => {
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
