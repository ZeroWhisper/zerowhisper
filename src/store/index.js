import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const { createSagaMonitor, createEnhancer } = console.tron;

const sagaMonitor = createSagaMonitor ? createSagaMonitor() : null;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [];
middlewares.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    createEnhancer ? createEnhancer() : null
  )
);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
