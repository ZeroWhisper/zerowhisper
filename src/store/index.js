import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Reactotron from "config/reactotron";

import reducers from "./ducks";
import sagas from "./sagas";

const dev = process.env.NODE_ENV === "development";
const { createSagaMonitor, createEnhancer } = Reactotron;

let sagaMiddleware = dev
  ? createSagaMiddleware(createSagaMonitor())
  : createSagaMiddleware();

// create the saga middleware
const middlewares = [sagaMiddleware];

const apply = applyMiddleware(...middlewares);
const params = [apply];

if (dev) params.push(createEnhancer());

const composer = compose(...params);

let store = createStore(reducers, composer);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
