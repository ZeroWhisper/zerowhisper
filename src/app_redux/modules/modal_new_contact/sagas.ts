import { all, delay, takeLatest, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// import IAppFile from '@/@types/IAppFile';
import { api_hts } from '@/services/api_hts';
import { Types, IForm } from './types';

import { ActionsModalNewContact } from '.';
import { RootState } from '../rootReducer';

const isDev = process.env.NODE_ENV === 'development';

const headers = {
  'Content-Type': 'multipart/form-data',
};

// https://medium.com/swlh/typescript-redux-saga-and-promises-b9792c575417
// const selector = (state: RootState) => state.app_default.show;

function* request() {
  const selector = (state: RootState) => state.modal_new_contact;
  type ISelector = ReturnType<typeof selector>;

  try {
    // const { form } = (yield select(selector)) as ISelector;
    const { data } = (yield select(selector)) as ISelector;

    const form: IForm = {
      agendamento: data.agendamento,
      antiCorrupcao: data.antiCorrupcao,
      cargo: data.cargo,
      dataReuniao: data.dataReuniao,
      descricaoDecisao: data.descricaoDecisao,
      esfera: data.esfera.id,
      horarioFinal: data.horarioFinal,
      horarioInicial: data.horarioInicial,
      id: data.id,
      idCidade: data.cidade.id,
      idColaboradorAlocacao: data.colaboradorAlocacao.id,
      idColaboradorAlocacaoParticipante:
        data.colaboradorAlocacaoParticipante.id,
      idEmpresa: data.idEmpresa,
      idPais: data.pais.id,
      justificativa: data.justificativa,
      local: data.local,
      poder: data.poder.id,
      possuiProcuracao: data.possuiProcuracao,
      setor: data.setor,
      tematica: data.tematica,
    };

    isDev && console.log('Enviando FORM', form);

    yield put(ActionsModalNewContact.set({ key: 'form', value: form }));

    yield put(ActionsModalNewContact.set({ key: 'isOpen', value: true }));
    yield put(ActionsModalNewContact.success());
  } catch (e) {
    console.log('Erro on Request');
  }
}

function* submit() {
  const selector = (state: RootState) => {
    const { form, files_upload } = state.modal_new_contact;
    return { form, files_upload };
  };
  type ISelector = ReturnType<typeof selector>;

  try {
    const { form, files_upload } = (yield select(selector)) as ISelector;

    isDev && console.log('VIA POST', form);

    const response = yield call(api_hts.post, '/api/agentepublico', form);

    if (response.status !== 201) throw new Error('Erro ao enviar dados');

    isDev && console.log('Resposta do post', response);

    const idAgentePublico = response.data;

    yield call(
      upload_files_recursive,
      files_upload,
      idAgentePublico,
      form.idEmpresa,
    );

    yield delay(5000);

    yield put(ActionsModalNewContact.set({ key: 'done', value: true }));
    toast.info('Casdastro feito com sucesso');
    yield put(ActionsModalNewContact.success());
  } catch (e) {
    console.log('Error on submit modal', e.message);
    toast.info('Erro ao enviar dados');
    yield put(ActionsModalNewContact.failure());
  }
}

function* upload_files_recursive(files: any[], idAgentePublico, idEmpresa) {
  if (Array.isArray(files) === false) return false;
  // if (files.length === 0) return true;

  const file = files.pop();

  try {
    const params = new URLSearchParams({
      idEmpresa: String(idEmpresa),
      idAgentePublico: String(idAgentePublico),
    });

    const url = '/api/agentepublico/upload?' + params;

    const formData = new FormData();

    // formData.append('idAgentePublico', String(idAgentePublico));
    // formData.append('idEmpresa', String(idEmpresa));
    formData.append('file', file as any, file.name);

    isDev && console.log('>> formData >> ', formData);

    const response = yield call(api_hts.post, url, formData, { headers });

    isDev && console.log('>> Resposta >> ', response);

    if (files.length > 0) {
      return yield call(
        upload_files_recursive,
        files,
        idAgentePublico,
        idEmpresa,
      );
    } else {
      return true;
    }
  } catch (e) {
    isDev && console.log('>> Erro >> ' + e.message);
    return false;
  }
}

// export function* upload_files(idAgentePublico: Number) {
//   const selector = (state: RootState) => {
//     return {
//       idEmpresa: state.agent_public.idEmpresa,
//       files_upload: state.modal_new_contact.files_upload,
//     };
//   };
//   type ISelector = ReturnType<typeof selector>;

//   try {
//     const { idEmpresa, files_upload } = (yield select(selector)) as ISelector;

//     const params = new URLSearchParams({
//       idEmpresa: String(idEmpresa),
//       idAgentePublico: String(idAgentePublico),
//     });

//     const url = '/api/agentepublico/upload?' + params;

//     files_upload.forEach(async file => {
//       const formData = new FormData();

//       formData.append('file', file as any);

//       isDev && console.log('>> formData >> ', formData);

//       const response = await api_hts.post(url, formData, { headers });

//       isDev && console.log('>> Resposta', response);
//     });

//     return true;
//   } catch (e) {
//     console.log('Erro ao fazer upload');
//   }

//   return false;
// }

// const sendFiles = async (
//   files_upload: IAppFile[],
//   idAgentePublico,
//   idEmpresa,
// ) => {
//   const url = '/api/agentepublico/upload';

//   try {
//     files_upload.forEach(async file => {
//       const formData = new FormData();

//       formData.append('idAgentePublico', String(idAgentePublico));
//       formData.append('idEmpresa', String(idEmpresa));
//       formData.append('file', file as any, file.name);

//       const response = await api_hts.post(url, formData, { headers });

//       console.log('Resposta Upload', response);
//     });
//   } catch (e) {
//     // console.log('Erro ao enviar arquivo: ' + e.message);
//   }
// };

function* loadcolabs() {
  const selector = (state: RootState) => state.modal_new_contact;
  type ISelector = ReturnType<typeof selector>;

  try {
    const { form } = (yield select(selector)) as ISelector;

    if (!form.idEmpresa) return;

    // const url = '/api/seletor/colaboradoralocacao/' + form.idEmpresa;
    const url = '/api/seletor/colaborador/' + form.idEmpresa;
    const response = yield call(api_hts.get, url);

    const data = response.data;

    type IColab = {
      id: string;
      descricao: string;
      cargo: string;
      setor: string;
    };

    const value = data.map((e: IColab) => ({
      label: e.descricao,
      value: e.id,
      cargo: e.cargo,
      setor: e.setor,
    }));

    yield put(ActionsModalNewContact.set({ key: 'colabs', value }));
  } catch (e) {}
}

export default all([
  takeLatest(Types.SUBMIT, submit),
  // takeLatest(Types.CHANGE_CAMPAIGN, change_campaign),
  // takeLatest(Types.UPLOAD_FILES, upload_files),
  takeLatest(Types.REQUEST, request),
  takeLatest(Types.LOADCOLABS, loadcolabs),
]);
