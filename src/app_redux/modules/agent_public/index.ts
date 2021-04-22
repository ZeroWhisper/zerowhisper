import { ActionType } from 'typesafe-actions';

import * as Interface from '@/@types/InterfaceAgentPublic';

import { Types } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsAgentPublic = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

export interface INITIAL_TYPE {
  data?: Interface.InterfaceAgentPublicDataItem[];
  show?: Interface.InterfaceAgentPublicShowItem[];
  form?: any;
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
  form: {},
  search: '',
  loading: false,
  error: '',

  idEmpresa: 3,
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
        idEmpresa: action.payload,
        error: null,
        loading: true,
      };
    }

    case Types.SUCCESS: {
      return { ...state, data: action.payload, loading: false };
    }

    case Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    case Types.RESET_FORM: {
      return state;
    }

    case Types.SEARCHING: {
      return { ...state, loading: true, search: action.payload };
    }

    case Types.ORDERBY:
      return { ...state };
    default:
      return state;
  }
};
