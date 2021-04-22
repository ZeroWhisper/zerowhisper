import { Reducer, Middleware, createStore, applyMiddleware } from 'redux';

import { YTActions } from './modules/yt/types';
import { GeekActions } from './modules/geek/types';

import { RootState } from './modules/rootReducer';

export type StoreAction = YTActions & GeekActions;

type _reducers = Reducer<RootState, StoreAction>;
type _middlewares = Middleware[];

const create = (reducers: _reducers, middlewares: _middlewares) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default create;
