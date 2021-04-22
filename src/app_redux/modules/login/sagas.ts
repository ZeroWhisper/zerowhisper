import { all, put, takeLatest, select, call, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { api_hts } from '@/services/api_hts';

import { Types } from './types';
import { Actions, ActionsLogin } from './index';
import { RootState } from '../rootReducer';
import StashStorage from '@/utils/StashStorage';

export function* set(_action?: Actions) {
  try {
    yield put(ActionsLogin.showing());
  } catch (e) {
    console.log('SAGA SET e', e);
  }
}

export function* request(_action?: Actions) {
  try {
    const { form } = yield select((state: RootState) => state.login);

    const response = yield call(api_hts.post, '/token', form);

    if (response.status !== 200) throw new Error('Erro ao realizar login');

    yield delay(2000);

    const { token } = response.data;

    yield call(StashStorage.setItem, '@serial', token);

    yield put(ActionsLogin.success(response.data));
  } catch (e) {
    // console.log('LOGIN REQUEST ERROR', e.message);
    // yield call(toast.info, e.message);
    toast.warn('Usuário e senha não conferem');
    yield put(ActionsLogin.failure(e.message));
  }
}

export default all([
  takeLatest(Types.SET, set),
  takeLatest(Types.REQUEST, request),
]);
