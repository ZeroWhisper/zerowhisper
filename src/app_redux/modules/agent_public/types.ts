import { INITIAL_TYPE } from './index';
// import {
//   InterfaceAgentPublicDataItem,
//   InterfaceAgentPublicShowItem,
// } from '@/@types/InterfaceAgentPublic';

// export interface INITIAL_TYPE {
//   data?: InterfaceAgentPublicDataItem[];
//   show?: InterfaceAgentPublicShowItem[];
//   form?: any;
//   search?: string;
//   count?: number;
//   loading?: boolean;
//   error?: string;
//   idEmpresa: number;
//   pageNumber: number;
//   pageSize: number;
// }

export enum Types {
  SET = 'agent_public/SET',
  SETFORM = 'agent_public/SETFORM',
  REQUEST = 'agent_public/REQUEST',
  SUCCESS = 'agent_public/SUCCESS',
  FAILURE = 'agent_public/FAILURE',
  LOADING = 'agent_public/LOADING',
  SHOWING = 'agent_public/SHOWING',
  ORDERBY = 'agent_public/ORDERBY',
  RESET_FORM = 'agent_public/RESET_FORM',
  SEARCHING = 'agent_public/SEARCHING',
}

export interface iSet {
  key: keyof INITIAL_TYPE;
  value: any;
}

export interface iSetform extends iSet {}

export interface iRequest {
  idEmpresa: number;
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  // id: number | string;
}

export interface iSuccess {
  data?: any;
}

export interface iFailure {
  error?: string;
}
