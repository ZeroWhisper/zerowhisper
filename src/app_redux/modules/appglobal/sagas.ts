import { all, put, call, select, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as AppGlobalTypes from './types';

import * as ActionsAppGlobal from './actions';
// type Actions = ActionType<typeof ActionsAppGlobal>;

export function* request(action?: ActionType<typeof ActionsAppGlobal>) {
  try {
    // action?.payload.
  } catch (e) {}
}

export default all([takeLatest(AppGlobalTypes.Types.REQUEST, request)]);
