import { all } from 'redux-saga/effects';

import app_default from './app_default/sagas';

function* rootSaga() {
  const list = [];
  list.push(app_default);
  yield all(list);
}

export default rootSaga;
