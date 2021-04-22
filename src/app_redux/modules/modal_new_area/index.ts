import { ActionType } from 'typesafe-actions';

import { DataModalNewArea } from './types/DataModalNewArea';
import { ShowModalNewArea } from './types/ShowModalNewArea';
import { FormModalNewArea } from './types/FormModalNewArea';

import { Types, INITIAL_TYPE } from './types';
import * as actions from './actions';
// import { FormModalNewArea } from './types/FormModalNewArea';

// Uso Global
export const ActionsModalNewArea = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

const INITIAL: INITIAL_TYPE = {
  id: 0,
  data: {} as DataModalNewArea,
  show: {} as ShowModalNewArea,
  form: {} as FormModalNewArea,

  active_step: 0,
  isOpen: false,
  loading: false,
  error: '',
  idEmpresa: 0,
  modalDeleteIsOpen: false,

  modal_type: 'Novo',
};

const reducer = (state = INITIAL, action: Actions) => {
  let _new = state;

  switch (action.type) {
    case Types.SET: {
      const { key, value } = action.payload;

      _new = {
        ...state,
        [key]: value,
      };

      return _new;
    }

    case Types.SETFORM: {
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    }

    case Types.REQUEST:
      return {
        ...state,
        error: null,
        idEmpresa: action.payload,
        isOpen: true,
        loading: true,
      };

    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };

    case Types.FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case Types.SUBMIT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.VIEWMODAL: {
      _new = {
        ...state,
        id: action.payload,
        isOpen: true,
        modal_type: 'Visualizar',
        loading: true,
        error: null,
      };

      return _new;
    }

    case Types.EDITMODAL: {
      _new = {
        ...state,
        id: action.payload,
        isOpen: true,
        modal_type: 'Editar',
        loading: true,
        error: null,
      };

      return _new;
    }

    case Types.REMOVEMODAL: {
      _new = {
        ...state,
      };

      return _new;
    }

    case Types.REMOVE: {
      _new = {
        ...state,
        id: action.payload,
        loading: true,
        error: null,
      };

      return _new;
    }

    default:
      return state;
  }
};

export const ReducerModalNewArea = reducer;
