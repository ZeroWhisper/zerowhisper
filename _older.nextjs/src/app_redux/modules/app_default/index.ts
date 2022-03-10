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
  data?: any;
  show?: any;
  form?: any;

  loading?: boolean;
  error?: string;
}

const INITIAL: INITIAL_TYPE = {
  data: {},
  show: {},
  form: {},
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

    default:
      return state;
  }
};
