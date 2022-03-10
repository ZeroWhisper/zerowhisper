import React from 'react';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

// import * as S from './style';

export function Dashboard(_props: DashboardProps) {
  // const {} = _props;

  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

interface DashboardProps {
  // extends React.HTMLAttributes<HTMLDivElement>
  children?: React.ReactNode;
}
