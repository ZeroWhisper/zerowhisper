import { ActionType } from 'typesafe-actions';

import { Types, INITIAL_TYPE } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsJudicial = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

const INITIAL: INITIAL_TYPE = {
  data: null,
  show: null,
  form: {},

  id: 0,
  idAdd: 0,
  idDelete: 0,
  loading: false,
  error: '',

  isAddOpen: false,
  isDelOpen: false,

  form_add_colabs: null,

  search: '',

  pageNumber: 1,
  pageSize: 10,

  count: 0,
  currentPage: 0,
  totalPage: 0,
};

const reducer = (state = INITIAL, action: Actions) => {
  let _new = state;

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

    // case Types.LOADING:
    // return { ...state, show: Logic.showList(state) };
    // return state;

    case Types.REQUEST: {
      _new = { ...state, id: action.payload, error: null, loading: true };
      return _new;
    }

    case Types.SUCCESS: {
      _new = { ...state, data: action.payload, loading: false };
      return _new;
    }

    case Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    case Types.ORDERBY:
      return { ...state };

    case Types.TOOGLEMODALADD: {
      _new = {
        ...state,
        // idAdd: action.payload,
        isAddOpen: !state.isAddOpen,
        form_add_colabs: [],
      };
      return _new;
    }

    case Types.TOOGLEMODALDEL: {
      _new = {
        ...state,
        isDelOpen: !state.isDelOpen,
      };
      return _new;
    }

    case Types.REMOVEREQUEST: {
      _new = {
        ...state,
        // idDelete: action.payload,
        // isDelOpen: !state.isDelOpen,
        // colabs: [],
      };
      return _new;
    }

    default:
      return state;
  }
};
