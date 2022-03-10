import { ReactNode } from 'react';

import { Summary } from './Summary';
import { TransactionsTable } from './TransactionsTable';

import * as S from './style';

export function Body(_props: BodyProps) {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}

interface BodyProps {
  children?: ReactNode;
}
