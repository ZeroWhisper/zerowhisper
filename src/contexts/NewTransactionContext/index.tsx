import { useTransactions } from 'contexts/TransactionsContext';
import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from 'services/api_local';

interface NewTransactionForm {
  title: string;
  amount: number;
  type: string;
  category: 'deposit' | 'withdraw';
}

interface NewTransactionData {
  isNewTransactionModalOpen: boolean;
  newTransactionForm: NewTransactionForm;
  handleCloseNewTransactionModal: () => void;
  handleOpenNewTransactionModal: () => void;
  setForm: (params: any) => void;
  createTransaction: () => void;
}

const NewTransactionContext = createContext<NewTransactionData>(
  {} as NewTransactionData,
);

export function NewTransactionProvider({
  children,
}: NewTransactionProviderProps) {
  const { requestTransaction } = useTransactions();

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const [newTransactionForm, setNewTransactionForm] = useState(
    {} as NewTransactionForm,
  );

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function setForm(params: any) {
    setNewTransactionForm(oldNewTransactionForm => {
      console.log('FORM', { ...oldNewTransactionForm, ...params });

      return { ...oldNewTransactionForm, ...params };
    });
  }

  async function createTransaction() {
    let error = '';
    if (!newTransactionForm.title) error = 'Complete o formulário';
    if (!newTransactionForm.amount) error = 'Complete o formulário';
    if (!newTransactionForm.category) error = 'Complete o formulário';
    if (error) {
      alert(error);
      return;
    }

    const response = await api.post('/transactions', newTransactionForm);
    // console.log('CREATE', response.data);

    handleCloseNewTransactionModal();

    if (requestTransaction) await requestTransaction();

    return response.data.transaction;
  }

  return (
    <NewTransactionContext.Provider
      value={{
        newTransactionForm,
        isNewTransactionModalOpen,
        handleCloseNewTransactionModal,
        handleOpenNewTransactionModal,
        setForm,
        createTransaction,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  );
}

interface NewTransactionProviderProps {
  children?: ReactNode;
}

export function useNewTransaction() {
  const context = useContext(NewTransactionContext);

  return context;
}
