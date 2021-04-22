import { ActionType } from 'typesafe-actions';

import * as Interface from './types';
import * as actions from './actions';

// Uso Global
export const ActionsAppDefault = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

export interface INITIAL_TYPE {
  data?: {
    paises?: any;
    cidades?: any;
    poderes?: any;
    esferas?: any;
    empresas?: any;
    setores?: any;
    colaboradores?: any;
    colaboradoresAlocacao?: any;
    configuracao?: any;
  };

  show?: {
    paises: { label: string; value: any }[];
    cidades: { label: string; value: any }[];
    poderes: { label: string; value: any }[];
    esferas: { label: string; value: any }[];
    empresas: { label: string; value: any }[];
    setores: { label: string; value: any }[];
    colaboradores: { label: string; value: any }[];
    colaboradoresAlocacao?: {
      label: string;
      value: any;
      cargo: string;
      setor: string;
    }[];
    configuracao: {
      // corPrincipal: string | 'rgba(0,13,130,0.63)';
      // corSecundaria: string | 'rgba(115,115,115,0.73)';
      // logo: string | 'https://storage.googleapis.com/file-default/33456216';
      corPrincipal: string;
      corSecundaria: string;
      logo: string;
    };
  };

  form?: any;
  search?: string;
  loading?: boolean;
  error?: string;
}

const INITIAL: INITIAL_TYPE = {
  data: {},
  show: {} as any,
  form: {},
  search: '',
  loading: false,
  error: '',
};

const reducer = (state = INITIAL, action: Actions) => {
  switch (action.type) {
    case Interface.Types.SET: {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    }

    case Interface.Types.SETFORM: {
      const { key, value } = action.payload;
      const { form } = state;
      return { ...state, form: { ...form, [key]: value } };
    }

    case Interface.Types.LOADING:
      // return { ...state, show: Logic.showList(state) };
      return state;

    case Interface.Types.REQUEST: {
      return { ...state, error: null, loading: true };
    }

    case Interface.Types.SUCCESS: {
      return { ...state, data: action.payload, loading: false };
    }

    case Interface.Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    case Interface.Types.ORDERBY:
      return { ...state };
    default:
      return state;
  }
};
