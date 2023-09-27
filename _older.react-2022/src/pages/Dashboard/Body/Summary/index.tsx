import { useTransactions } from 'contexts/TransactionsContext';

import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

import * as S from './style';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <S.Container>
      <div className={'summary-card'}>
        <header>
          <span>Entradas</span>
          <FaRegArrowAltCircleUp size={32} color={'green'} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>

      <div className={'summary-card'}>
        <header>
          <span>Saídas</span>
          <FaRegArrowAltCircleDown size={32} color={'red'} />
        </header>
        <strong>
          {'-'}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className={'summary-card summary-total'}>
        <header>
          <span>Total</span>
          <MdAttachMoney size={32} color={'white'} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
