import { AccountsProvider } from 'contexts/AccountContext';
import { NewTransactionProvider } from 'contexts/NewTransactionContext';
import { TransactionsProvider } from 'contexts/TransactionsContext';

export function RootContexts({ children }: any) {
  return (
    <AccountsProvider>
      <TransactionsProvider>
        <NewTransactionProvider>{children}</NewTransactionProvider>
      </TransactionsProvider>
    </AccountsProvider>
  );
}
