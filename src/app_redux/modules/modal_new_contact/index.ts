import { ActionType } from 'typesafe-actions';
import { format } from 'date-fns';

import { Types, IForm, INITIAL_TYPE } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsModalNewContact = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

const form: IForm = {
  antiCorrupcao: false,
  dataReuniao: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"),
  idPais: 8,
  agendamento: false,
  possuiProcuracao: false,
  idColaboradorAlocacaoParticipante: null,
  descricaoDecisao: null,
} as any;

const INITIAL: INITIAL_TYPE = {
  data: {} as any,
  form: {} as any,
  loading: false,
  error: '',

  active_step: 0,
  modal_type: null,
  isOpen: false,
  done: false,
  // collaborators: [],
  colabs: [],
  files_upload: [],
};

const reducer = (state = INITIAL, action: Actions) => {
  switch (action.type) {
    case Types.SET: {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    }

    case Types.SETFORM: {
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    }

    case Types.REQUEST: {
      return { ...state, error: '', form: {}, loading: true };
    }

    case Types.SUCCESS: {
      return { ...state, loading: false };
    }

    case Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    case Types.RESET_FORM: {
      return { ...state, form: form };
    }

    case Types.SET_PROPS_FORM: {
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    }

    case Types.CHANGE_CAMPAIGN: {
      return state;
    }

    case Types.UPLOAD_FILES: {
      return state;
    }

    case Types.SUBMIT: {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};
