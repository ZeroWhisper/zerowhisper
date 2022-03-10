import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import mirage from 'services/mirage';

mirage();

// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get('/login', (path, handler) => {
//       // let attrs = JSON.parse(request.requestBody);
//       // console.log(attrs);
//       console.log('path', path);
//       console.log('handler', handler);
//       return 'teste';
//     });
//   },

//   seeds(server) {
//     server.create('reminder', { text: 'Walk the dog' });
//     server.create('reminder', { text: 'Take out the trash' });
//     server.create('reminder', { text: 'Work out' });
//   },
//   W,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
