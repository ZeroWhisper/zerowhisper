import 'react-redux';

import { RootState } from './modules/rootReducer';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

export {};
