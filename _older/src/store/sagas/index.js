// import { all, takeLatest } from "redux-saga/effects";
import { all } from "redux-saga/effects";

// import { Types as LoginTypes } from "../ducks/login";

// import { loginRequest } from "./login";

export default function* rootSaga() {
  const list = [];

  // list.push(takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest));

  yield all([...list]);
}
