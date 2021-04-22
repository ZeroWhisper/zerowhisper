// import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';

import * as agent_public from './agent_public';

import * as app_default from './app_default';

import * as app_global from './app_global';

import * as by_area from './by_area';

import * as judicial from './judicial';

import * as login from './login';

import * as modal_alert from './modal_alert';

import * as modal_new_area from './modal_new_area';

import * as modal_new_contact from './modal_new_contact';

import * as modal_notify_contact from './modal_notify_contact';

// import { ReducerNewContact } from './newcontact';
// import { ReducerTableNewContact } from './tablenewcontact';
// import { ReducerTableAux } from './table_aux';

export type StoreAction =
  | app_default.Actions
  | app_global.Actions
  | by_area.Actions
  | agent_public.Actions
  | judicial.Actions
  | login.Actions
  | modal_alert.Actions
  | modal_new_contact.Actions
  | modal_notify_contact.Actions;

const rootReducer = combineReducers({
  agent_public: agent_public.reducer,
  app_default: app_default.reducer,
  app_global: app_global.reducer,
  by_area: by_area.reducer,
  judicial: judicial.reducer,
  login: login.reducer,
  modal_alert: modal_alert.reducer,
  modal_new_contact: modal_new_contact.reducer,
  modal_notify_contact: modal_notify_contact.reducer,
  modal_new_area: modal_new_area.reducer,
  // table_aux: ReducerTableAux,
  // tablenewcontact: ReducerTableNewContact,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
