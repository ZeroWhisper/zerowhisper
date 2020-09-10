import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

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

    if (process.env.NODE_ENV === 'development') {
      let tron = this.getInstanceReactotron();

      if (tron) {
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

// declare global {
//   interface Console {
//     tron: any;
//   }
// }

// interface PluginConfig {
//   except?: string[];
// }

// export interface iTron {
//   createSagaMonitor(): any;
//   clear(): void;
// }

// let tron: iTron | any;
// let tron = {};

// if (process.env.NODE_ENV === 'development') {
//   tron = Reactotron.configure()
//     .use(reactotronRedux())
//     .use(sagaPlugin({ except: [''] }))
//     .connect();

//   tron.clear();

//   // console.tron = tron;
//   const { log } = console;
//   console.log = (props) => {
//     tron.log(props);
//     log(props);
//   };
// } else {
//   tron = {};
// }

// // export const reactotron: iTron = tron;
// export default tron;
