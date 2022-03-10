import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from 'services/api_local';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
  requestTransaction: () => void;
}

const TransactionsContext = createContext<TransactionData>(
  {} as TransactionData,
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions);
    });
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  async function requestTransaction() {
    console.log('VOU CHAMAR O GET');

    const response = await api.get('/transactions');

    console.log('GET TRANSACTIONS', response.data);

    setTransactions(response.data.transactions);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, requestTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

interface TransactionProviderProps {
  children: ReactNode;
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
