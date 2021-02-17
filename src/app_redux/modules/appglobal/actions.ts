import { action } from 'typesafe-actions';
import * as AppGlobalTypes from './types';

export function set(payload: AppGlobalTypes.iSet) {
  return action(AppGlobalTypes.Types.SET, payload);
}

export function request(payload?: AppGlobalTypes.iRequest) {
  return action(AppGlobalTypes.Types.REQUEST, payload);
}

export function success(payload?: AppGlobalTypes.iSuccess) {
  return action(AppGlobalTypes.Types.SUCCESS, payload);
}

export function failure(payload?: AppGlobalTypes.iFailure) {
  return action(AppGlobalTypes.Types.FAILURE, payload);
}
