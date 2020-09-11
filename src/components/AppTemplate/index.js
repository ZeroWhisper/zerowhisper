import React from 'react';

import AppContainer from '~/components/AppContainer';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';

const AppTemplate = ({ children }) => {
  return (
    <AppContainer>
      <AppHeader />
      <AppBody>{children}</AppBody>
    </AppContainer>
  );
};

export default AppTemplate;
