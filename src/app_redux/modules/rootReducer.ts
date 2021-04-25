// import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';

import * as app_default from './app_default';

export type StoreAction = app_default.Actions;

const rootReducer = combineReducers({
  app_default: app_default.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
