import React from 'react';

import * as S from './style';

const AppBody = ({ children }) => {
  return (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );
};

export default AppBody;
