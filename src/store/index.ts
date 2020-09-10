import { Middleware } from 'redux';

import reactotron from '~/config/reactotron';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

let sagaMiddleware = reactotron.startReactotronMiddleware();

const middlewares: Middleware[] = [];
middlewares.push(sagaMiddleware);

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
