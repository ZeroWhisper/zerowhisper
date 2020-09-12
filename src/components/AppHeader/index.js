import React from 'react';

import * as S from './style';
import { Link } from 'react-router-dom';

const AppHeader = props => {
  return (
    <S.Container>
      <div>
        <ul>
          <li>
            <Link to={'/example'}>HOME</Link>
          </li>
          <li>
            <Link to={'/css'}>CSS</Link>
          </li>
          <li>
            <Link to={'/contact'}>CONTATO</Link>
          </li>
        </ul>
      </div>
    </S.Container>
  );
};

export default AppHeader;
