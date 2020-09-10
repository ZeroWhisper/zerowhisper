import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Types {
  SET = 'geek/SETTING',
  REQUEST = 'geek/REQUEST',
  SUCCESS = 'geek/SUCCESS',
  FAILURE = 'geek/FAILURE',
}

export type GeekActions = ActionType<typeof actions>;

export interface GeekState<T> {
  data?: T; // Return of backend
  show?: T; // Data normalized to show
  form?: T; // Just to form
  loading: boolean;
  error: string;
}

export interface iSet {
  key: string;
  value: string;
}

export interface iRequest {
  name?: string;
}

export interface iSuccess {}

export interface iFailure {}

export interface Column {
  id: string;
  title: string;
  task: Task[];
}

export interface Task {
  id: string;
  content: any;
}
