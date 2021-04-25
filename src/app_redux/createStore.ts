import {
  // Reducer,
  // Middleware,
  createStore,
  applyMiddleware,
} from 'redux';

// import { RootState, StoreAction } from './modules/rootReducer';

// type _reducers = Reducer<RootState, StoreAction>;
// type _middlewares = Middleware[];

// const create = (reducers: _reducers, middlewares: _middlewares) => {
const create = (reducers: any, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default create;
