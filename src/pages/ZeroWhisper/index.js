import React from 'react';

// import Header from './Header';
// import Body from './Body';

// import * as S from './style';
import { Redirect } from 'react-router-dom';

const ZeroWhisper = props => {
  return <Redirect to={'/example'} />;
  // return (
  //   <S.Container>
  //     <Header />
  //     <Body />
  //   </S.Container>
  // );
};

export default ZeroWhisper;
