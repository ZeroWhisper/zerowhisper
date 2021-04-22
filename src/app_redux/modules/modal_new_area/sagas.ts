import { all, put, call, select, delay, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { api_hts } from '@/services/api_hts';

import { ActionsModalNewArea } from './index';
import { Types } from './types';
import { RootState } from '../rootReducer';
import { DataModalNewArea } from './types/DataModalNewArea';
import { convertData } from './logic';
import { ActionsByArea } from '../by_area';

// https://medium.com/swlh/typescript-redux-saga-and-promises-b9792c575417
// const selector = (state: RootState) => state.app_default.show;

function* request() {
  // const selector = (state: RootState) => state.modal_new_area;
  // type ISelector = ReturnType<typeof selector>;
  // yield put(ActionsModalNewArea.failure());
  // try {
  //   const {
  //     search,
  //     pageNumber,
  //     pageSize,
  //     idEmpresa,
  //   } = (yield select(selector)) as ISelector;
  //   const params = new URLSearchParams({
  //     pageNumber: String(pageNumber),
  //     pageSize: String(pageSize),
  //   });
  //   if (search && search.length > 2) {
  //     params.append('searchTerm', search);
  //   }
  //   const [setores, response] = yield all([
  //     yield call(api_hts., '/api/agentepublicopoder?' + params),
  //   ]);
  //   console.log('RESPOSTA BY AREA', setores, response);
  //   // const response = yield call(api_hts, '/api/agentepublicopoder?' + params);
  //   const data: InterfaceByAreaDataItem[] = response.data.data;
  //   const count: number = response.data.count;
  //   const show: InterfaceByAreaShowItem[] = data.map(e => ({
  //     id: e.id,
  //     tematica: e.descricao,
  //     area: app_default.show.poderes.find(poder => poder.value === e.poder.id)
  //       .label,
  //     item: e,
  //   }));
  //   yield put(ActionsByArea.set({ key: 'setor', value: count }));
  //   yield put(ActionsByArea.set({ key: 'count', value: count }));
  //   yield put(ActionsByArea.set({ key: 'show', value: show }));
  //   yield put(ActionsByArea.success(data));
  // } catch (e) {
  //   yield put(ActionsByArea.failure(e.message));
  // }

  yield put(ActionsModalNewArea.success());
}

function* submit() {
  const selector = (state: RootState) => {
    const { idEmpresa } = state.app_global;
    return { ...state.modal_new_area, idEmpresa };
  };
  type ISelector = ReturnType<typeof selector>;

  try {
    const { form, idEmpresa } = (yield select(selector)) as ISelector;

    const response = yield call(api_hts.post, '/api/agentepublicopoder', form);

    if (response.status !== 201)
      throw new Error('Não foi possível ao salvar dados');

    // if (response.status !== 200)
    //   throw new Error('Não foi possível excluir os dados');

    yield call(upload_files);

    toast.info('Item cadastrado com sucesso!');

    yield put(ActionsByArea.request(idEmpresa));
    yield put(ActionsModalNewArea.set({ key: 'isOpen', value: false }));
    yield put(ActionsModalNewArea.success());
  } catch (e) {
    toast.info('Ocorreu um erro ao salvar os dados');
    // console.log('Erro ao salvar dados: ' + e.message);
    yield put(ActionsModalNewArea.failure());
  }
}

function* upload_files() {
  try {
    yield call(console.log, 'Carregando arquivos');
  } catch (e) {}
}

function* viewmodal() {
  const selector = (state: RootState) => state.modal_new_area;
  type ISelector = ReturnType<typeof selector>;

  const { id } = (yield select(selector)) as ISelector;

  try {
    const url = '/api/agentepublicopoder/' + id;
    const response = yield call(api_hts.get, url);

    if (response.status !== 200) throw new Error('Erro ao buscar dados');

    const data: DataModalNewArea = response.data;

    const { form, show } = convertData(data);

    yield put(ActionsModalNewArea.set({ key: 'form', value: form }));
    yield put(ActionsModalNewArea.set({ key: 'show', value: show }));

    yield put(ActionsModalNewArea.success(data));
  } catch (e) {
    const msg_error = 'Servidor não respondeu a requisição';
    yield put(ActionsModalNewArea.failure(msg_error));
  }
}

function* remove() {
  const selector = (state: RootState) => state.modal_new_area;
  type ISelector = ReturnType<typeof selector>;

  try {
    const { id, idEmpresa } = (yield select(selector)) as ISelector;

    if (id < 1)
      throw new Error('Não foi possível selecionar o item para a ação');

    const params = new URLSearchParams({
      id: String(id),
    });

    const url = '/api/agentepublicopoder?' + params;
    const response = yield call(api_hts.delete, url);

    // console.log('DELETE RESPONSE', response);

    if (response.status !== 200)
      throw new Error('Não foi possível excluir os dados');

    yield delay(1000);
    const value = false;
    yield put(ActionsModalNewArea.set({ key: 'modalDeleteIsOpen', value }));

    toast.info('Item removido com sucesso!');

    yield put(ActionsByArea.request(idEmpresa));
    yield put(ActionsModalNewArea.success());
  } catch (e) {
    toast.warn(e.message);
    yield put(ActionsModalNewArea.failure(e.message));
  }
}

export default all([
  takeLatest(Types.REQUEST, request),
  takeLatest(Types.SUBMIT, submit),
  takeLatest(Types.VIEWMODAL, viewmodal),
  takeLatest(Types.EDITMODAL, viewmodal),
  takeLatest(Types.REMOVE, remove),
]);
