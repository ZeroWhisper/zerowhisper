export enum Types {
  SET = 'app_default/SET',
  SETFORM = 'app_default/SETFORM',
  REQUEST = 'app_default/REQUEST',
  SUCCESS = 'app_default/SUCCESS',
  FAILURE = 'app_default/FAILURE',
  LOADING = 'app_default/LOADING',
  SHOWING = 'app_default/SHOWING',
  ORDERBY = 'app_default/ORDERBY',
}

export interface IItemSelect {
  id: number;
  descricao: string;
}

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
