import { ActionType } from 'typesafe-actions';

import { Types } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsLogin = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

export interface INITIAL_TYPE {
  data?: any;
  show?: any;
  form?: any;
  doLogout?: boolean;
  loading?: boolean;
  error?: string;
}

const INITIAL: INITIAL_TYPE = {
  data: 1,
  show: null,
  // form: { username: '', password: '' },
  form: { username: 'mpablo2012@gmail.com', password: 'Egm@12345.' },
  doLogout: false,
  loading: false,
  error: '',
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
      return { ...state, error: null, loading: true };
    }

    case Types.SUCCESS: {
      return { ...state, data: action.payload, loading: false };
    }

    case Types.FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }

    // case Types.SHOWING: {
    //   const { data, search, offset, page, column, order } = state;

    //   let result = [...data];

    //   // Filtra por busca
    //   if (search && search.length >= 3) {
    //     result = result.filter(e => e.includes(search));
    //   }

    //   // Filtra por coluna ASC ou DESC
    //   if (order && column) {
    //     result = Logic.orderBy({ list: result, column, order });
    //   }

    //   const total_page = result.length / offset;
    //   const total_items = result.length;

    //   console.log('Total de páginas', total_page);
    //   console.log('Total de items', total_items);

    //   // Filtra pra mostrar na página certa
    //   result = result.splice(page * offset, offset);

    //   return { ...state, total_items, total_page, show: result };
    // }

    case Types.ORDERBY:
      return { ...state };
    default:
      return state;
  }
};
