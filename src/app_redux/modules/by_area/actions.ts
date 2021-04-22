import { action } from 'typesafe-actions';
import * as Interface from './types';

export function set(payload: Interface.iSet) {
  return action(Interface.Types.SET, payload);
}

export function setform(payload: Interface.iSet) {
  return action(Interface.Types.SETFORM, payload);
}

export function loading(payload: Interface.iSetform) {
  return action(Interface.Types.LOADING, payload);
}

export function failure(payload?: string) {
  return action(Interface.Types.FAILURE, payload);
}

export function success(payload?: any) {
  return action(Interface.Types.SUCCESS, payload);
}

export function request(payload: number) {
  return action(Interface.Types.REQUEST, payload);
}

export function order_by(payload?: { column: string; order: string }) {
  return action(Interface.Types.ORDERBY, payload);
}

export function showing() {
  return action(Interface.Types.SHOWING);
}
