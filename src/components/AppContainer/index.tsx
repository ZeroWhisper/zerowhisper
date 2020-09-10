import React from 'react';

import { Content } from './style';

const AppContainer: React.FC = ({ children }) => {
  return <Content>{children}</Content>;
};

export default AppContainer;
