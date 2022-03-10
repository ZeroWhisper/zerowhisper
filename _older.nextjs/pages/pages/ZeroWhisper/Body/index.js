import React from 'react';

import Photo from './Photo';
import Desc from './Desc';

import * as S from './style';
// background-image: linear-gradient(red, yellow);

const Body = props => {
  return (
    <S.Container>
      <h3>console.log....</h3>
      <section>
        <span>
          <Photo />
        </span>
        <div>
          <Desc />
        </div>
      </section>
    </S.Container>
  );
};

export default Body;
