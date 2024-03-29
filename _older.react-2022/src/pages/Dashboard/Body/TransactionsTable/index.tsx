import { useTransactions } from 'contexts/TransactionsContext';
import React from 'react';

import * as S from './style';

export function TransactionsTable(_props: TransactionsTableProps) {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt),
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
}

interface TransactionsTableProps {
  children?: React.ReactNode;
}
