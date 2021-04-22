import { action } from 'typesafe-actions';
import * as Interface from './types';

export function set(payload: Interface.iSet) {
  return action(Interface.Types.SET, payload);
}

export function setform(payload: Interface.iSetform) {
  return action(Interface.Types.SETFORM, payload);
}

export function request() {
  return action(Interface.Types.REQUEST);
}

export function success(payload?: Interface.iSuccess) {
  return action(Interface.Types.SUCCESS, payload);
}

export function failure(payload?: Interface.iFailure) {
  return action(Interface.Types.FAILURE, payload);
}

export function submit() {
  return action(Interface.Types.SUBMIT);
}

export function loadcolabs() {
  return action(Interface.Types.LOADCOLABS);
}

// export function loadModal(payload: Interface.) {
//   return action(Interface.Types.LOAD_MODAL);
// }

export function onChangeCampaign(payload: number) {
  return action(Interface.Types.CHANGE_CAMPAIGN, payload);
}

export function resetForm() {
  return action(Interface.Types.RESET_FORM);
}

export function uploadFiles() {
  return action(Interface.Types.UPLOAD_FILES);
}

export function setPropsForm<T>(payload: {
  key: keyof Interface.IForm;
  value: T;
}) {
  return action(Interface.Types.SET_PROPS_FORM, payload);
}
