import IAppFile from '@/@types/IAppFile';
import { InterfaceAgentPublicDataItem } from '@/@types/InterfaceAgentPublic';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface INITIAL_TYPE {
  data?: InterfaceAgentPublicDataItem;
  form: Partial<IForm>;
  loading: boolean;
  error: string;

  active_step: number;
  isOpen: boolean;
  done: boolean;
  modal_type?: 'Visualizar' | 'Novo';

  collaborators?: ICollaborator[];
  colabs?: {
    label: string;
    value: string;
    setor: string;
    cargo: string;
  }[];
  files_upload: IAppFile[];
}

export interface IForm {
  id?: number;
  justificativa: string;
  local: string;
  cargo: string;
  setor: string;
  agendamento: boolean;
  descricaoDecisao: string;
  possuiProcuracao: boolean;
  dataReuniao: string;
  horarioInicial: string;
  horarioFinal: string;
  idPais: number;
  tematica: string;
  idCidade: number;
  idColaboradorAlocacao: number;
  poder: number;
  esfera: number;
  idEmpresa: number;
  idColaboradorAlocacaoParticipante: number;
  antiCorrupcao: boolean;
}

export enum Types {
  SET = 'modal_new_contact/SET',
  SETFORM = 'modal_new_contact/SETFORM',
  REQUEST = 'modal_new_contact/REQUEST',
  SUCCESS = 'modal_new_contact/SUCCESS',
  FAILURE = 'modal_new_contact/FAILURE',
  SUBMIT = 'modal_new_contact/SUBMIT',
  RESET_FORM = 'modal_new_contact/RESET_FORM',
  SET_PROPS_FORM = 'modal_new_contact/SET_PROPS_FORM',
  CHANGE_CAMPAIGN = 'modal_new_contact/CHANGE_CAMPAIGN',
  UPLOAD_FILES = 'modal_new_contact/UPLOAD_FILES',
  LOAD_MODAL = 'modal_new_contact/LOAD_MODAL',
  LOADCOLABS = 'modal_new_contact/LOADCOLABS',
}

export type ICollaborator = {
  cargo: string;
  descricao: string;
  id: number;
  setor: string;
};

export type IActions = ActionType<typeof actions>;

export interface iSet {
  key: keyof INITIAL_TYPE;
  value: any;
}

// // How to set a Generic Set from a 'ParamType'
// export type ISet<OtherType> = {
//   [Prop in keyof OtherType]: OtherType[Prop];
// };
// export type SuperSet = ISet<INITIAL_TYPE>;

// // How to set a Generic Set with a existend Type
// export type ISet2 = {
//   [Prop in keyof INITIAL_TYPE]: INITIAL_TYPE[Prop];
// };

// // For exemple: declare a type, try set diferent type and get error
// const S: SuperSet = {} as any;
// // ERROR
// S.done = ''

// type OnlyForm = Pick<INITIAL_TYPE, 'form'>;

// const F: OnlyForm = {} as any;
// F.form;

export interface iSetform extends iSet {}

export interface iRequest {
  // name?: string;
  modal_type: 'Visualizar' | 'Novo';
  id: number;
}

export interface iSuccess {
  data?: any;
}

export interface iFailure {
  error?: string;
}
