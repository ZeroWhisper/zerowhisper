import { all, takeLatest } from 'redux-saga/effects';
// import { all, put, call, select, takeLatest } from 'redux-saga/effects';
// import { ActionType } from 'typesafe-actions';
import * as app_globalTypes from './types';

// import * as Actionsapp_global from './actions';
// type Actions = ActionType<typeof Actionsapp_global>;

// export function* request(action?: ActionType<typeof Actionsapp_global>) {
//   try {
//     // action?.payload.
//     // yield console.log;
//   } catch (e) {}
// }

export default all([takeLatest(app_globalTypes.Types.REQUEST, () => {})]);
