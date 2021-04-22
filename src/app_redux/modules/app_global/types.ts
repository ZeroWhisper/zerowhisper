import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Types {
  SET = 'global/SETTING',
  REQUEST = 'global/REQUEST',
  SUCCESS = 'global/SUCCESS',
  FAILURE = 'global/FAILURE',
}

export interface app_globalState {
  data?: any; // Return of backend
  show?: any; // Data normalized to show
  form?: any; // Just to form
  loading: boolean;
  error: string;
}

// export type YTActions = ActionType<typeof actions>;
export type IActions = ActionType<typeof actions>;

export interface iSet {
  key: string;
  value: any;
}

export interface iRequest {
  name?: string;
}

export interface iSuccess {
  data?: any;
}

export interface iFailure {
  error?: string;
}
