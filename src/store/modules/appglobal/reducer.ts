import { AppGlobalState, AppGlobalActions, Types } from './types';

const INITIAL: AppGlobalState = {
  loading: false,
  error: '',
};

const reducer = (state = INITIAL, action: AppGlobalActions): AppGlobalState => {
  switch (action.type) {
    case Types.SET:
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    default:
      return state;
  }
};

export default reducer;
