import React from 'react';
// import * as Redux from 'react-redux';

import WrapSnow from '@/components/3_Organisms/WrapSnow';

import * as S from './style';

function AppPage(_props: IAppPage) {
  // const {} = _props;

  return (
    <S.Container>
      <WrapSnow snow_size={1}>
        <p>Teste</p>
      </WrapSnow>
    </S.Container>
  );
}

interface IAppPage extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default AppPage;
