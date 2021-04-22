import { action } from 'typesafe-actions';
import * as Interface from './types';
import { DataModalNewArea } from './types/DataModalNewArea';

export function set(payload: Interface.iSet) {
  return action(Interface.Types.SET, payload);
}

export function setform(payload: Interface.iSetform) {
  return action(Interface.Types.SETFORM, payload);
}

export function request(payload: number) {
  return action(Interface.Types.REQUEST, payload);
}

export function success(payload?: Interface.IData[] | DataModalNewArea) {
  return action(Interface.Types.SUCCESS, payload);
}

export function failure(payload?: Interface.iFailure | string) {
  return action(Interface.Types.FAILURE, payload);
}

export function submit() {
  return action(Interface.Types.SUBMIT);
}

export function viewmodal(payload: number) {
  return action(Interface.Types.VIEWMODAL, payload);
}

export function editmodal(payload: number) {
  return action(Interface.Types.EDITMODAL, payload);
}

export function removemodal(payload: number) {
  return action(Interface.Types.REMOVEMODAL, payload);
}

export function remove(payload: number) {
  return action(Interface.Types.REMOVE, payload);
}
