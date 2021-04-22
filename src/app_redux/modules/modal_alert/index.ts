import { ActionType } from 'typesafe-actions';

import { Types } from './types';
import * as actions from './actions';

// Uso Global
export const ActionsModalDecisionAsk = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

interface IForm {}

interface INITIAL_TYPE {
  active_step: number;
  isOpen: false;
  loading: boolean;
  error: string;
  form: IForm;
}

const INITIAL: INITIAL_TYPE = {
  active_step: 0,
  isOpen: false,
  loading: false,
  error: '',
  form: {},
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

    default:
      return state;
  }
};
