import { all, takeLatest, call, put, select } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

import {
  InterfaceAgentPublicShowItem,
  InterfaceAgentPublicDataItem,
} from '@/@types/InterfaceAgentPublic';

import { api_hts } from '@/services/api_hts';

import { RootState } from '../rootReducer';

import { ActionsAgentPublic } from './index';
import * as Interface from './types';

// https://medium.com/swlh/typescript-redux-saga-and-promises-b9792c575417
// const selector = (state: RootState) => state.app_default.show;

function* request() {
  const selector = (state: RootState) => state.agent_public;
  type ISelector = ReturnType<typeof selector>;

  const { idEmpresa, pageNumber, pageSize, search } = (yield select(
    (state: RootState) => state.agent_public,
  )) as ISelector;

  try {
    if (!Number.isInteger(idEmpresa))
      throw Error('O caminho de busca está errado');

    const params = new URLSearchParams({
      idEmpresa: String(idEmpresa),
      pageNumber: String(pageNumber),
      pageSize: String(pageSize),
    });

    if (search && search.length > 2) {
      params.append('searchTerm', search);
    }

    const url = '/api/agentepublico?' + params;
    const response = yield call(api_hts.get, url);

    if (response.status !== 200) throw new Error('Erro ao buscar dados');

    const data: InterfaceAgentPublicDataItem[] = response.data.data;

    const currentPage = response.data.currentPage;
    const totalPage = response.data.totalPage;
    const count = response.data.count;

    const show: InterfaceAgentPublicShowItem[] = data.map(e => ({
      id: e.id,
      setor: e.setor,
      cargo: e.cargo,
      nome_colaborador: e.colaboradorAlocacao.nome,
      item: e,
    }));

    yield put(ActionsAgentPublic.set({ key: 'count', value: count }));
    yield put(ActionsAgentPublic.set({ key: 'totalPage', value: totalPage }));
    yield put(ActionsAgentPublic.set({ key: 'show', value: show }));
    yield put(
      ActionsAgentPublic.set({ key: 'currentPage', value: currentPage }),
    );

    yield put(ActionsAgentPublic.success(data));
  } catch (e) {
    // console.log('ERROR AGENT PUBLIC REQUEST', e.message);
    // yield call(toast.warning, 'ERROR AGENT PUBLIC REQUEST ' + e.message);
    yield put(ActionsAgentPublic.failure(e.message));
  }
}

export default all([
  takeLatest(Interface.Types.REQUEST, request),
  // takeLatest(Types.REQUEST, request),
]);
