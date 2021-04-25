import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/app_redux';

import * as S from './style';

function AppContainer(_props: IAppContainer) {
  const { children } = _props;

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <S.Container>{children}</S.Container>
      </BrowserRouter>
    </ReduxProvider>
  );
}

interface IAppContainer extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default AppContainer;

// import React from 'react';
// import { Provider as ReduxProvide } from 'react-redux';

// import * as S from './style';

// const AppContainer = ({ children }) => {
//   return (
//     <ReduxProvide>
//       <S.Content>{children}</S.Content>;
//     </ReduxProvide>
//   );
// };

// export default AppContainer;
