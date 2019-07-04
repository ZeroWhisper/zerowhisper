import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const { createSagaMonitor, createEnhancer } = console.tron;
console.log("INICIANDO STORE", createSagaMonitor, createEnhancer);

const sagaMonitor = createSagaMonitor ? { createSagaMonitor() } : {};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware(sagaMonitor);

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    createEnhancer ? createEnhancer() : {}
  )
);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
