export interface StateReducer {
  counter: number;
  clicks: number;
}

interface Action {
  type: string;
}

interface DispatchAction<T> extends Action {
  payload: T;
}

export const stateInitial: StateReducer = {
  counter: 0,
  clicks: 0,
};

const reducer = <T>(
  state: StateReducer = stateInitial,
  action: DispatchAction<T>,
) => {
  switch (action.type) {
    case 'plus':
      return { ...state, counter: state.counter + 1, clicks: state.clicks + 1 };
    case 'minus':
      return { ...state, counter: state.counter - 1, clicks: state.clicks + 1 };
    default:
      return state;
  }
};

const actions = {
  plusAction: <T>(payload?: T | undefined): DispatchAction<T | undefined> => {
    return {
      type: 'plus',
      payload,
    };
  },

  minusAction: <T>(payload?: T | undefined): DispatchAction<T | undefined> => {
    return {
      type: 'minus',
      payload,
    };
  },
};

export { reducer, actions };

// function App() {
//   const re = useReducer(reducer, initialValue);
// }

// const [state, dispatch] = useReducer(reducer, {});

// export [state, dispatch];

// const reducer = useReducer(reducer, ) {

// }

// export default function reducer() {

// }
