import React from 'react';

import Header from './components/Header';
import Body from './components/Body';

const Trello: React.FC = _props => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export default Trello;
