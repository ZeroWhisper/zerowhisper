import { action } from 'typesafe-actions';
import * as YTTypes from './types';

export function set(payload: YTTypes.iSet) {
  return action(YTTypes.Types.SET, payload);
}

export function request(payload?: YTTypes.iRequest) {
  return action(YTTypes.Types.REQUEST, payload);
}

export function success(payload?: YTTypes.iSuccess) {
  return action(YTTypes.Types.SUCCESS, payload);
}

export function failure(payload?: YTTypes.iFailure) {
  return action(YTTypes.Types.FAILURE, payload);
}
