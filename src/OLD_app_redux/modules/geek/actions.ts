import { action } from 'typesafe-actions';
import { iSet, iRequest, iSuccess, iFailure, Types } from './types';

export function set(payload: iSet) {
  return action(Types.SET, payload);
}

// export function request(payload?: iRequest) {
//   return action(Types.REQUEST, payload);
// }

// export function success(payload?: iSuccess) {
//   return action(Types.SUCCESS, payload);
// }

// export function failure(payload?: iFailure) {
//   return action(Types.FAILURE, payload);
// }
