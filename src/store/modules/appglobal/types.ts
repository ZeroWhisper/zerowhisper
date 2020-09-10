import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Types {
  SET = 'SETTING',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface AppGlobalState {
  data?: any; // Return of backend
  show?: any; // Data normalized to show
  form?: any; // Just to form
  loading: boolean;
  error: string;
}

// export type YTActions = ActionType<typeof actions>;
export type AppGlobalActions = ActionType<typeof actions>;

export interface iSet {
  key: string;
  value: string;
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
