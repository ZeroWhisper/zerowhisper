export enum Types {
  SET = 'by_area/SET',
  SETFORM = 'by_area/SETFORM',
  REQUEST = 'by_area/REQUEST',
  SUCCESS = 'by_area/SUCCESS',
  FAILURE = 'by_area/FAILURE',
  LOADING = 'by_area/LOADING',
  SHOWING = 'by_area/SHOWING',
  ORDERBY = 'by_area/ORDERBY',
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
