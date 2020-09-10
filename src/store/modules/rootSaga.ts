import { all } from 'redux-saga/effects';

import yt from './yt/sagas';

export default function* rootSaga() {
  return yield all([yt]);
}
