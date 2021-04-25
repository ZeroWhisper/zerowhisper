import {
  // all, takeLatest, call, put, select
  all,
  takeLatest,
} from 'redux-saga/effects';

// import { api_hts } from '@/services/api_hts';
// import StashStorage from '@/utils/StashStorage';

// import * as Interface from './types';
// import { ActionsAppDefault } from './index';
// import { RootState } from '../rootReducer';

// const convert = (e: Interface.IItemSelect) => ({
//   value: e.id,
//   label: e.descricao,
// });

function* request() {
  // const selector = (state: RootState) => state.app_global;
  // type ISelector = ReturnType<typeof selector>;
  // try {
  //   const token = yield call(StashStorage.getItem, '@serial');
  //   if (!token) {
  //     yield put(ActionsAppDefault.success());
  //     return;
  //   }
  //   const { idEmpresa } = (yield select(selector)) as ISelector;
  //   const [
  //     cidades,
  //     esfera,
  //     paises,
  //     poderes,
  //     empresas,
  //     setores,
  //     colaboradores,
  //     colaboradoresAlocacao,
  //     configuracao,
  //   ] = yield all([
  //     yield call(api_hts.get, '/api/seletor/cidade'),
  //     yield call(api_hts.get, '/api/seletor/esfera'),
  //     yield call(api_hts.get, '/api/seletor/pais'),
  //     yield call(api_hts.get, '/api/seletor/poder'),
  //     yield call(api_hts.get, '/api/seletor/empresa'),
  //     yield call(api_hts.get, '/api/seletor/setor/' + idEmpresa),
  //     yield call(api_hts.get, '/api/seletor/colaborador/' + idEmpresa),
  //     // yield call(api_hts.get, '/api/seletor/colaboradoralocacao/' + idEmpresa),
  //     yield call(api_hts.get, '/api/seletor/colaborador/' + idEmpresa),
  //     yield call(api_hts.get, '/api/configuracao'),
  //   ]);
  //   const data = {
  //     cidades,
  //     esfera,
  //     paises,
  //     poderes,
  //     empresas,
  //     setores,
  //     colaboradores,
  //     colaboradoresAlocacao,
  //     configuracao,
  //   };
  //   // console.log('>>> Default data', data);
  //   const show = {
  //     cidades: cidades?.data?.map(convert),
  //     esferas: esfera?.data?.map(convert),
  //     paises: paises?.data?.map(convert),
  //     poderes: poderes?.data?.map(convert),
  //     empresas: empresas?.data?.map(convert),
  //     setores: setores?.data?.map(convert),
  //     colaboradores: colaboradores?.data.map(convert),
  //     // colaboradores: colaboradores?.data.map(convert),
  //     colaboradoresAlocacao: colaboradoresAlocacao.data.map(e => ({
  //       value: e.id,
  //       label: e.descricao,
  //       cargo: e.cargo,
  //       setor: e.setor,
  //     })),
  //     configuracao: configuracao?.data,
  //   };
  //   yield put(ActionsAppDefault.set({ key: 'data', value: data }));
  //   yield put(ActionsAppDefault.set({ key: 'show', value: show }));
  //   yield put(ActionsAppDefault.success());
  // } catch (e) {
  //   // yield call(toast.warning, `ERROR REQUEST APP_DEFAULT - ${e.message}`);
  //   yield put(ActionsAppDefault.failure(e.message));
  // }
}

export default all([takeLatest('TESTE', request)]);
