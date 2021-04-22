import * as YTTypes from './types';

const INITIAL: YTTypes.YTState = {
  loading: false,
  error: '',
};

const reducer = (
  state = INITIAL,
  action: YTTypes.YTActions,
): YTTypes.YTState => {
  switch (action.type) {
    case YTTypes.Types.SET:
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    case YTTypes.Types.REQUEST:
      return state;
    default:
      return state;
  }
};

export default reducer;
