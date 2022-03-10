import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import StashStorage from './utils/StashStorage';
import reactotron from './utils/Reactotron';

let sagaMiddleware = reactotron.startReactotronMiddleware();

const middlewares: Middleware[] = [];

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // Fazer o logger não exibir determinada Action (se true então exibe)
    predicate: (_getState, action) => action.type !== 'global/SETTING',
  });

  middlewares.push(logger);
}

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: process.env.NODE_ENV === 'development' ? storage : StashStorage,
  },
  rootReducer,
);

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store as any);
let { dispatch } = store;

sagaMiddleware.run(rootSaga);

export { store, persistor, dispatch };
