import React from 'react';

import Photo from './Photo';
import Desc from './Desc';

import * as S from './style';
// background-image: linear-gradient(red, yellow);

const Body = () => {
  return (
    <S.Container>
      {/* <h3>console.log....</h3> */}
      <h2>Marcos Roberto Cordeiro</h2>
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
