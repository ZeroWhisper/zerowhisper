export enum Types {
  SET = 'judicial/SET',
  SETFORM = 'judicial/SETFORM',
  REQUEST = 'judicial/REQUEST',
  SUCCESS = 'judicial/SUCCESS',
  FAILURE = 'judicial/FAILURE',
  LOADING = 'judicial/LOADING',
  SHOWING = 'judicial/SHOWING',
  ORDERBY = 'judicial/ORDERBY',
  MODALREMOVE = 'judicial/MODALREMOVE',
  TOOGLEMODALADD = 'judicial/TOOGLEMODALADD',
  TOOGLEMODALDEL = 'judicial/TOOGLEMODALDEL',
  ADDREQUEST = 'judicial/ADDREQUEST',
  REMOVEREQUEST = 'judicial/REMOVEREQUEST',
}

export interface INITIAL_TYPE {
  data?: { id: string; colaborador: string }[];
  show?: any;
  form?: any;

  id?: number;
  idAdd?: number;
  idDelete?: number;

  isAddOpen: boolean;
  isDelOpen: boolean;
  form_add_colabs: {
    id: number;
    colaborador: string;
  }[];

  search?: string;
  loading?: boolean;
  error?: string;

  pageNumber: number;
  pageSize: number;

  count: number;
  currentPage: number;
  totalPage: number;
}

export interface iSet {
  key: keyof INITIAL_TYPE;
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
