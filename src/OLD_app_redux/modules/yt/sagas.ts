import { all, put, call, select, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as ActionsYT from './actions';
import * as YTTypes from './types';

// import api_google from '@/services/api_google';
import { RootState } from '@/app_redux/modules/rootReducer';

export function* request(action?: ActionType<YTTypes.YTActions>) {
  try {
    // const { busca } = yield select((state: RootState) => state.yt.form);
    // const response = yield call(api_google.get, '/search', {
    //   params: {
    //     q: busca,
    //   },
    // });
    // console.tron.log('REPOSTA', response);
    // yield put(ActionsYT.success(response.data));
  } catch (e) {
    // yield put(ActionsYT.failure({ error: e.message }));
    // console.log(e.message);
  }
}

export default all([takeLatest(YTTypes.Types.REQUEST, request)]);
