import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import reactotron from '~/config/reactotron';

reactotron.getInstanceReactotron();

// Teste
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
