import React from 'react';
import * as Icons from 'react-icons/all';

import * as S from './style';

const url =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';

function Google(_props: IGoogle) {
  return (
    <S.Container>
      <S.DivLogo>
        <img className={'classImageGoogle'} src={url} alt="Google" />
      </S.DivLogo>
      <S.DivSearch>
        <div>
          <input
            type="text"
            name="busca"
            id="busca"
            placeholder={'Ola mundo'}
          />
          <Icons.GiRabbitHead size={22} color={'gold'} />
        </div>
      </S.DivSearch>
      <div>
        <div>
          <Icons.FaGlobeAmericas size={36} color={'blue'} />
        </div>
      </div>
    </S.Container>
  );
}

interface IGoogle extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default Google;
