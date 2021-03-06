import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

/**
 * Tomar cuidado com esse arquivo pra mobile ou web
 */

// Tuto for reactotron:
// https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md
// https://github.com/infinitered/reactotron-react-native/issues/79
// https://github.com/infinitered/reactotron/issues/1184
type A = typeof Reactotron;
// type A = any;

declare global {
  interface Console {
    tron: A | any;
  }
}

interface IConfigTron {
  tron: A | null;
  startReactotronMiddleware(): SagaMiddleware;
  getInstanceReactotron(): A;
}

export default {
  tron: null,

  startReactotronMiddleware: function (): SagaMiddleware {
    let sagaMiddleware = createSagaMiddleware();

    console.log(
      process.env.NODE_ENV,
      'development',
      process.env.NODE_ENV === 'development',
    );

    if (process.env.NODE_ENV === 'development') {
      let tron = this.getInstanceReactotron();

      if (tron) {
        console.log('MONITOR R');
        const sagaMonitor = tron.createSagaMonitor!();
        sagaMiddleware = createSagaMiddleware({ sagaMonitor });
      }
    }

    return sagaMiddleware;
  },

  getInstanceReactotron: function (): A {
    if (!this.tron) {
      this.tron = Reactotron.configure()
        .use(reactotronRedux())
        .use(sagaPlugin({ except: [''] }))
        .connect();

      console.tron = this.tron;

      this.tron.clear!();
      console.log('CRIANDO...', process.env);
    } else {
      console.log('JA TENHO');
    }

    return this.tron;
  },
} as IConfigTron;

// General: https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md

// yarn add -D reactotron-react-js reactotron-redux reactotron-redux-saga
// source: https://github.com/infinitered/reactotron/issues/1184
