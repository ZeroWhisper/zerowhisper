import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MindorHeader from './MinorHeader';
import LargerHeader from './LargerHeader';

import * as S from './style';

const AppHeader = props => {
  // https://www.npmjs.com/package/react-responsive#easy-mode
  const isMobile = useMediaQuery({ maxWidth: 400 });

  return (
    <S.Container>
      <div>{isMobile ? <MindorHeader /> : <LargerHeader />}</div>
    </S.Container>
  );
};

export default AppHeader;
