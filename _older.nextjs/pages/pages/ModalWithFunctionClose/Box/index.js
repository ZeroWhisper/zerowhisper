import React from 'react';
//import * as Redux from 'react-redux';

import InsideBox from './InsideBox';

import * as S from './style';

const Box = props => {
  return (
    <S.Container>
      <InsideBox {...props} />
    </S.Container>
  );
};

export default Box;
