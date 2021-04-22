import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Types {
  SET = 'modal_decision_ask/SET',
  SETFORM = 'modal_decision_ask/SETFORM',
  REQUEST = 'modal_decision_ask/REQUEST',
  SUCCESS = 'modal_decision_ask/SUCCESS',
  FAILURE = 'modal_decision_ask/FAILURE',
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
