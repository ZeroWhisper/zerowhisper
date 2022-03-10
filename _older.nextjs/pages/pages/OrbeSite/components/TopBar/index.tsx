import React from 'react';

import * as S from './style';

export interface TopBarProps {
  children: React.ReactChild;
}

function TopBar({ children }: TopBarProps) {
  return <S.Container>{children}</S.Container>;
}

export default TopBar;
