import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdArrowDropUp } from 'react-icons/md';
// import { ImFacebook2 } from 'react-icons/';
// import * as Redux from 'react-redux';

import * as S from './style';

function SectionBody() {
  return (
    <S.Container>
      <div>
        <span></span>
        <Card />
      </div>
      <div>
        <span></span>
        <Card />
      </div>
      <div>
        <span></span>
        <Card />
      </div>
    </S.Container>
  );
}

const Card = () => {
  return (
    <S.StyledCard>
      <div>
        <p>
          <FaFacebookSquare size={24} /> @_ZeroWhisper
        </p>
        <h2>2000</h2>
        <h5>Followers</h5>
        <span>
          <MdArrowDropUp size={20} />
          12 Today
        </span>
      </div>
    </S.StyledCard>
  );
};

export default SectionBody;
