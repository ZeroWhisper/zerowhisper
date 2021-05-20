import React from 'react';

import AppContainer from '@/components/AppContainer';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App(_props: IApp) {
  // const {} = _props;

  return (
    <AppContainer>
      <GlobalStyles />
      <Routes />
    </AppContainer>
  );
}

interface IApp extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default App;
// import React from 'react';

// import AppContainer from '@/components/AppContainer';
// // import { Provider } from 'react-redux';
// // import { BrowserRouter } from 'react-router-dom';

// // import { store } from './store';
// // import GlobalStyle from './styles/global';
// import Routes from './routes';
// // import reactotron from '@/config/reactotron';

// // reactotron.getInstanceReactotron();

// const App = () => {
//   return (
//     <AppContainer>
//       <Routes />
//     </AppContainer>
//   );
//   // return (
//   //   <Provider store={store}>
//   //     <GlobalStyle />
//   //     <BrowserRouter>
//   //       <Routes />
//   //     </BrowserRouter>
//   //   </Provider>
//   // );
// };

// export default App;
