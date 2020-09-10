import { Reducer, Middleware, createStore, applyMiddleware } from 'redux';

import { YTActions } from './modules/yt/types';
import { GeekActions } from './modules/geek/types';

import { RootState } from './modules/rootReducer';

export type StoreAction = YTActions & GeekActions;

export default (
  reducers: Reducer<RootState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
