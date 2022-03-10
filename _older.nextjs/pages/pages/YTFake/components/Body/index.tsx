import React from 'react';
//import * as Redux from 'react-redux';

import { Content, Side } from './style';

const Body: React.FC = (props) => {
  return (
    <Content>
      <Side size={6}>OI</Side>
      <Side size={3}>OI</Side>
    </Content>
  );
};

export default Body;
