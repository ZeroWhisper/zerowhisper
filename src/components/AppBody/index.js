import React from 'react';

import * as S from './style';

const AppBody = ({ children }) => {
  return (
    <S.Container>
      <section>{children}</section>
    </S.Container>
  );
};

export default AppBody;
