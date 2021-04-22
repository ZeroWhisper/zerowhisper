import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import reactotron from '@/utils/Reactotron';
import StashStorage from '@/utils/StashStorage';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

let sagaMiddleware = reactotron.startReactotronMiddleware();

const middlewares: Middleware[] = [];

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    predicate: (getState, action) => action.type !== 'global/SETTING',
  });

  middlewares.push(logger);
}

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: StashStorage,
    whitelist: ['login', 'app_global', 'app_default'],
  },
  rootReducer,
);

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store as any);
let { dispatch } = store;

sagaMiddleware.run(rootSaga);

export { store, persistor, dispatch };
