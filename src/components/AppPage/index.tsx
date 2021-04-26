import React from 'react';
// import * as Redux from 'react-redux';

import { ReactComponent as ReactLogo } from '@/assets/svg/monopoly/board.svg';
import WrapSnow from '@/components/3_Organisms/WrapSnow';

import * as S from './style';

function AppPage(_props: IAppPage) {
  // const {} = _props;

  return (
    <WrapSnow snow_size={1}>
      <S.Container>
        {/* <p>Teste</p> */}
        <ReactLogo title={'Board'} />
        <S.Card>
          <span>TEXT</span>
        </S.Card>
      </S.Container>
    </WrapSnow>
  );
}

interface IAppPage extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default AppPage;
