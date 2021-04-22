import { ActionType } from 'typesafe-actions';

import { Types } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsByArea = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

interface IForm {
  id: number;
  idSetor: number;
  poder: number;
  descricao: string;
}

interface IData {
  id: number;
  descricao: string;
  poder: {
    id: number;
    nome: string;
  };
}
export interface INITIAL_TYPE {
  data?: IData[];
  show?: any[];
  form?: IForm;
  search?: string;
  loading?: boolean;
  error?: string;
  idEmpresa: number;

  pageNumber: number;
  pageSize: number;

  count: number;
  currentPage: number;
  totalPage: number;
}

const INITIAL: INITIAL_TYPE = {
  data: null,
  show: null,
  form: null,
  idEmpresa: 0,
  search: '',
  loading: false,
  error: '',

  pageNumber: 1,
  pageSize: 10,

  count: 0,
  currentPage: 0,
  totalPage: 0,
};

const reducer = (state = INITIAL, action: Actions) => {
  switch (action.type) {
    case Types.SET: {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    }

    case Types.SETFORM: {
      const { key, value } = action.payload;
      const { form } = state;
      return { ...state, form: { ...form, [key]: value } };
    }

    case Types.LOADING:
      // return { ...state, show: Logic.showList(state) };
      return state;

    case Types.REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
        idEmpresa: action.payload,
      };
    }

    case Types.SUCCESS: {
      return { ...state, data: action.payload, loading: false };
    }

    case Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    case Types.ORDERBY:
      return { ...state };
    default:
      return state;
  }
};
