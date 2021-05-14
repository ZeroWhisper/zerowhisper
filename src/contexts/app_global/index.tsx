import React, { createContext, useCallback, useReducer } from 'react';

interface IState {
  data?: any;
  show?: any;
  form?: any;

  loading: boolean;
  error?: string;

  page?: number;
  currentPage?: number;
  totalPage?: number;
  count?: number;
}

interface IActions {
  setText: (text: string) => void;
  fetch: (props: { text: string; page: number }) => void;
}

interface IContext {
  state: IState;
  actions?: IActions;
}

const initialState: IState = {
  page: 1,
  loading: false,
  count: 0,
};

const store = createContext<IContext>({
  state: initialState,
});

const { Provider } = store;

const reducer = (state: IState, action: { type: string; payload: any }) => {
  let new_state = state;

  switch (action.type) {
    // case 'searching':
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //     data: [],
    //     count: 0,
    //   };
    // case 'success':
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //   };
    case 'set-text':
      new_state = { ...state, data: action.payload };
      return new_state;

    // case 'error':
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //     data: [],
    //     count: 0,
    //   };
    default:
      return new_state;
  }
};

const PaginationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: IActions = {
    setText: useCallback(payload => dispatch({ type: 'error', payload }), []),

    fetch: useCallback(payload => dispatch({ type: 'error', payload }), []),
  };

  // const setSearching = ({ text, page }) =>
  //   dispatch({ type: 'searching', text, page });

  // const setError = error => dispatch({ type: 'error', error });

  // const setSuccess = ({ data, count }) =>
  //   dispatch({ type: 'success', data, count });

  // const fetch = useCallback(({ text, page }) => {}, []);

  // const setText = (payload: any) => dispatch({ type: 'set-text', payload });

  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { store, PaginationProvider };
