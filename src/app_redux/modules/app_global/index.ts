import { ActionType } from 'typesafe-actions';

import { AppThemeNames } from '@/components/A/AppContainer/theme.type';

import { Types } from './types';
import * as actions from './actions';

// Uso Global
export const Actionsapp_global = actions;

// Uso do rootReducer
export type Actions = ActionType<typeof actions>;

// Uso do rootReducer
export { reducer };

interface INITIAL_TYPE {
  idEmpresa: number;
  isMobile?: boolean;
  isTablet?: boolean;
  isComputer?: boolean;
  isSideMenuOpen?: boolean;
  isSideMenuOpenMobile?: boolean;
  hasToken?: boolean;
  theme_selected: AppThemeNames;
}

const INITIAL: INITIAL_TYPE = {
  idEmpresa: 3,
  isMobile: false,
  isTablet: false,
  isComputer: false,
  isSideMenuOpen: true,
  isSideMenuOpenMobile: false,
  hasToken: false,
  theme_selected: 'THEME_GREEN',
};

const reducer = (state = INITIAL, action: Actions) => {
  switch (action.type) {
    case Types.SET:
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    default:
      return state;
  }
};
