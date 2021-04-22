import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
// import actions from './actions';

export enum Types {
  SET = 'modal_notify_contact/SET',
  SETFORM = 'modal_notify_contact/SETFORM',
  REQUEST = 'modal_notify_contact/REQUEST',
  SUCCESS = 'modal_notify_contact/SUCCESS',
  FAILURE = 'modal_notify_contact/FAILURE',
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
