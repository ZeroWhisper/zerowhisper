import { ActionType } from 'typesafe-actions';
import * as actions from '../actions';

import { DataModalNewArea } from './DataModalNewArea';
import { FormModalNewArea } from './FormModalNewArea';
import { ShowModalNewArea } from './ShowModalNewArea';

export enum Types {
  SET = 'modal_new_area/SET',
  SETFORM = 'modal_new_area/SETFORM',
  REQUEST = 'modal_new_area/REQUEST',
  SUCCESS = 'modal_new_area/SUCCESS',
  FAILURE = 'modal_new_area/FAILURE',
  SUBMIT = 'modal_new_area/SUBMIT',
  VIEWMODAL = 'modal_new_area/VIEWMODAL',
  EDITMODAL = 'modal_new_area/EDITMODAL',
  REMOVEMODAL = 'modal_new_area/REMOVEMODAL',
  REMOVE = 'modal_new_area/REMOVE',
}

export type IActions = ActionType<typeof actions>;

export interface INITIAL_TYPE {
  id?: number;
  data: DataModalNewArea;
  show: ShowModalNewArea;
  form: FormModalNewArea;

  active_step: number;
  isOpen: boolean;
  modalDeleteIsOpen: boolean;
  loading: boolean;
  error: string;
  idEmpresa: number;

  modal_type: 'Novo' | 'Visualizar' | 'Editar';
}

export interface IForm {
  id?: number;
  idSetor: number;
  poder: number;
  descricao: string;
}

export interface IData {
  id: number;
  descricao: string;
}
export interface IShow {
  label: string;
  value: string;
}

export interface iSet {
  key: keyof INITIAL_TYPE;
  value: any;
}

export interface iSetform {
  key: keyof IForm;
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
