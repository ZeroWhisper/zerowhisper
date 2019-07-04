export const Types = {
  LOGIN_REQUEST: "login/LOGIN_REQUEST",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
  LOGIN_FAILURE: "login/LOGIN_FAILURE"
};

const INITIAL_STATE = {
  login: null,
  loading: false
};

export default function login(state = INITIAL_STATE, action) {
  // Não precisa implementar os Switches para cada Type
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, loading: false };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: payload => ({
    type: Types.LOGIN_REQUEST,
    payload
  }),

  loginSuccess: payload => ({
    type: Types.LOGIN_SUCCESS,
    payload
  }),

  loginFailure: payload => ({
    type: Types.LOGIN_FAILURE,
    payload
  })
};
