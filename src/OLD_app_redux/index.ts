import { Middleware } from 'redux';
import { logger } from 'redux-logger';

import reactotron from '~/utils/Reactotron';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

let sagaMiddleware = reactotron.startReactotronMiddleware();

const middlewares: Middleware[] = [];
middlewares.push(sagaMiddleware);
// middlewares.push(logger);

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
