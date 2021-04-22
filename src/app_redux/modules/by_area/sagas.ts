import { all, put, call, select, takeLatest, delay } from 'redux-saga/effects';

import {
  InterfaceByAreaDataItem,
  InterfaceByAreaShowItem,
} from '@/@types/InterfaceByArea';
import { api_hts } from '@/services/api_hts';

import { ActionsByArea } from './index';
import { Types } from './types';
import { RootState } from '../rootReducer';
import { toast } from 'react-toastify';

// https://medium.com/swlh/typescript-redux-saga-and-promises-b9792c575417
// const selector = (state: RootState) => state.app_default.show;

function* request() {
  const selector = (state: RootState) => {
    const { pageNumber, pageSize, search, idEmpresa } = state.by_area;
    const { poderes } = state.app_default.show;
    return { search, pageNumber, pageSize, poderes, idEmpresa };
  };
  type ISelector = ReturnType<typeof selector>;

  try {
    yield delay(1000);

    const { search, pageNumber, pageSize, poderes } = (yield select(
      selector,
    )) as ISelector;

    const params = new URLSearchParams({
      pageNumber: String(pageNumber),
      pageSize: String(pageSize),
    });

    if (search && search.length > 2) {
      params.append('searchTerm', search);
    }

    const response = yield call(api_hts, '/api/agentepublicopoder?' + params);

    // console.log('RESPOSTA BY AREA', response);

    if (response.status !== 200) throw new Error('Erro ao buscar dados');

    const data: InterfaceByAreaDataItem[] = response.data.data;
    const count: number = response.data.count;
    const totalPage: number = response.data.totalPage;
    const currentPage: number = response.data.currentPage;

    const show: InterfaceByAreaShowItem[] = data.map(e => ({
      id: e.id,
      tematica: e.descricao,
      area: getArea(poderes, e),
      item: e,
    }));

    yield put(ActionsByArea.set({ key: 'count', value: count }));
    yield put(ActionsByArea.set({ key: 'totalPage', value: totalPage }));
    yield put(ActionsByArea.set({ key: 'currentPage', value: currentPage }));
    yield put(ActionsByArea.set({ key: 'show', value: show }));

    yield put(ActionsByArea.success(data));
  } catch (e) {
    toast.warning(e.message);
    yield put(ActionsByArea.failure(e.message));
  }
}

export default all([
  // takeLatest(Types.SET, set),
  takeLatest(Types.REQUEST, request),
]);

/**
 * Apenas encontra a string refente ao poder para o SHOW
 */
const getArea = (poderes, e) => {
  const poder = poderes?.find(poder => poder.value === e.poder.id);
  return poder?.label;
};
