import React from 'react';

import Header from './Header';
import Body from './Body';

import * as S from './style';

const ZeroWhisper = props => {
  return (
    <S.Container>
      <Header />
      <Body />
    </S.Container>
  );
};

export default ZeroWhisper;
