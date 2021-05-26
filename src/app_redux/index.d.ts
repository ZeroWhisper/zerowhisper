// import 'styled-componets';
import 'react-redux';

import { RootState } from './modules/rootReducer';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

// import { CustomThemeType } from '../components/Organisms/AppContainer/theme.type';

// type ThemeLight = CustomThemeType;

// declare module 'styled-components' {
//   export interface DefaultTheme {}
// }

export {};
