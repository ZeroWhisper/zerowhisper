import 'react-redux';

import { RootState } from './modules/rootReducer';

// talvez não funcione =(
declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

export {};
