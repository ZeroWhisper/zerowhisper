import { all } from 'redux-saga/effects';

import agent_public from './agent_public/sagas';
import app_default from './app_default/sagas';
import app_global from './app_global/sagas';
import by_area from './by_area/sagas';
import judicial from './judicial/sagas';
import login from './login/sagas';
import modal_new_contact from './modal_new_contact/sagas';
import modal_new_area from './modal_new_area/sagas';

export default function* rootSaga() {
  const list = [];
  list.push(agent_public);
  list.push(app_default);
  list.push(app_global);
  list.push(by_area);
  list.push(judicial);
  list.push(login);
  list.push(modal_new_contact);
  list.push(modal_new_area);
  return yield all(list);
}
