import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Types {
  SET = 'login/SET',
  SETFORM = 'login/SETFORM',
  REQUEST = 'login/REQUEST',
  SUCCESS = 'login/SUCCESS',
  FAILURE = 'login/FAILURE',
  LOADING = 'login/LOADING',
  SHOWING = 'login/SHOWING',
  ORDERBY = 'login/ORDERBY',
}

export type IActions = ActionType<typeof actions>;

export interface iSet {
  key: string;
  value: any;
}

export interface iSetform extends iSet {}

export interface iRequest {
  name?: string;
}

export interface iSuccess {
  data?: any;
}

export interface iFailure {
  error?: string;
}
