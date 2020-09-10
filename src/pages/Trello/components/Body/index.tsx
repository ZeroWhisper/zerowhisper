import React from 'react';

import Column from './components/Column';

import { Container } from './style';

const Body: React.FC = _props => {
  return (
    <Container>
      <Column />
      <Column />
    </Container>
  );
};

export default Body;
