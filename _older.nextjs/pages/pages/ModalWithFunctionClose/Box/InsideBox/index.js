import React from 'react';
//import * as Redux from 'react-redux';

import * as S from './style';

const InsideBox = ({ onClose }) => {
  return (
    <S.Container>
      <button onClick={() => onClose('teste')}>FECHAR</button>
    </S.Container>
  );
};

export default InsideBox;
