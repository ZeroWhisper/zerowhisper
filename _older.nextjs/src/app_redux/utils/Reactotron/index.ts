/**
 *
 * yarn add redux-saga redux redux-logger react-redux
 * yarn add -D reactotron-react-js reactotron-redux reactotron-redux-saga
 * yarn add -D @types/redux-logger
 *
 * Tuto for reactotron:
 * https://eric-nagamuta-blog.netlify.app/configurando-reactotron-no-react-native/
 * https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md
 * https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md
 * https://github.com/infinitered/reactotron-react-native/issues/79
 * https://github.com/infinitered/reactotron/issues/1184
 */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

type A = typeof Reactotron;

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

const isDev = process.env.NODE_ENV === 'development';

export default {
  tron: null,

  startReactotronMiddleware: function (): SagaMiddleware {
    let sagaMiddleware = createSagaMiddleware();

    // console.log(
    //   process.env.NODE_ENV,
    //   'development',
    //   process.env.NODE_ENV === 'development',
    // );

    // if (process.env.NODE_ENV === 'development') {
    if (isDev) {
      let tron = this.getInstanceReactotron();

      if (tron) {
        // console.log('MONITOR R');
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
      isDev && console.log('CREATING REACTOTRON...');
    } else {
      isDev && console.log('ALREADY UP REACTOTRON');
    }

    return this.tron;
  },
} as IConfigTron;
