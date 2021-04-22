import { all, put, call, takeLatest, select } from 'redux-saga/effects';

import { api_hts } from '@/services/api_hts';

import { RootState } from '../rootReducer';
import { Types } from './types';
import { ActionsJudicial } from '.';
import { toast } from 'react-toastify';

const isDev = process.env.NODE_ENV === 'development';

function* request() {
  const selector = (state: RootState) => state.judicial;
  type ISelector = ReturnType<typeof selector>;

  try {
    const { id, pageNumber, pageSize, search } = (yield select(
      selector,
    )) as ISelector;

    const params = new URLSearchParams({
      idPoder: String(id),
      pageNumber: String(pageNumber),
      pageSize: String(pageSize),
    });

    if (search && search.length > 2) {
      params.append('searchTerm', search);
    }

    const url = '/api/agentepublicopoder/colaborador?' + params;
    const response = yield call(api_hts.get, url);

    if (response.status !== 200) throw new Error('Erro ao carregar dados');

    const { data } = response;

    yield put(ActionsJudicial.set({ key: 'count', value: data.count }));
    yield put(ActionsJudicial.set({ key: 'totalPage', value: data.totalPage }));
    yield put(ActionsJudicial.set({ key: 'totalPage', value: data.totalPage }));

    yield put(ActionsJudicial.success(data.data));
  } catch (e) {
    console.log('FAILURE REQUEST JUDICIAL', e.message);
    yield put(ActionsJudicial.failure());
  }
}

function* toogleModalAdd() {
  const selector = (state: RootState) => state.judicial;
  type ISelector = ReturnType<typeof selector>;

  try {
    const { isAddOpen, idAdd } = (yield select(selector)) as ISelector;

    if (isAddOpen) {
      const params = new URLSearchParams({
        idPoder: String(idAdd),
        pageNumber: '1',
        pageSize: '200',
      });

      const url = '/api/agentepublicopoder/colaborador?' + params;
      const response = yield call(api_hts.get, url);

      if (response.status !== 200)
        throw new Error('Erro ao buscar colaboradores');

      const { data } = response.data;

      yield put(ActionsJudicial.set({ key: 'form_add_colabs', value: data }));
    } else {
      console.log('Modal fechou');
      yield put(ActionsJudicial.set({ key: 'form_add_colabs', value: null }));
    }
  } catch (e) {
    console.log('Erro toogle modal');
  }
}

function* addrequest() {
  const selector = (state: RootState) => state.judicial;
  type ISelector = ReturnType<typeof selector>;

  try {
    const { form_add_colabs, id } = (yield select(selector)) as ISelector;

    const list = form_add_colabs.map(e => e.id);

    const params = new URLSearchParams({
      idPoder: String(id),
    });

    const url = '/api/agentepublicopoder/colaborador?' + params;

    const response = yield call(api_hts.post, url, list);

    if (response.status !== 201)
      throw new Error('Response status ' + response.status);

    toast.info('Cadastrado com sucesso');
    yield put(ActionsJudicial.set({ key: 'isAddOpen', value: false }));
  } catch (e) {
    toast.info('Não foi possível cadastrar no momento');
    isDev && console.log('ERROR ADD COLAB ON JUR', e.message);
  }
}

export default all([
  takeLatest(Types.TOOGLEMODALADD, toogleModalAdd),
  takeLatest(Types.REQUEST, request),
  takeLatest(Types.ADDREQUEST, addrequest),
]);
