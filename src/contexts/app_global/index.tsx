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
  request: (props: { text: string; page: number }) => void;
  counter: (payload?: number) => void;
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

interface ActionType {
  type: 'UM' | 'DOIS' | 'COUNT';
  payload: any;
}

const { Provider } = store;

const reducer = (state: IState, action: ActionType) => {
  let new_state = state;

  switch (action.type) {
    case 'UM':
      new_state = { ...state, data: action.payload };
      return new_state;

    case 'DOIS':
      new_state = { ...state, data: action.payload };
      return new_state;

    case 'COUNT':
      console.log('VOU ATUALIZAR');
      new_state = { ...state, count: action.payload };
      return new_state;

    default:
      return new_state;
  }
};

const AppGlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: IActions = {
    setText: useCallback(payload => dispatch({ type: 'UM', payload }), []),

    request: useCallback(payload => dispatch({ type: 'DOIS', payload }), []),

    counter: useCallback(payload => {
      console.log('Opa, estou aqui', payload);
      dispatch({ type: 'COUNT', payload });
    }, []),
  };

  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { store, AppGlobalProvider };
