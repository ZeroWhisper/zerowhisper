import { action } from 'typesafe-actions';
import * as Interface from './types';

export function set(payload: Interface.iSet) {
  return action(Interface.Types.SET, payload);
}

export function setform(payload: Interface.iSetform) {
  return action(Interface.Types.SETFORM, payload);
}

export function request(payload?: Interface.iRequest) {
  return action(Interface.Types.REQUEST, payload);
}

export function success(payload?: Interface.iSuccess) {
  return action(Interface.Types.SUCCESS, payload);
}

export function failure(payload?: Interface.iFailure) {
  return action(Interface.Types.FAILURE, payload);
}
