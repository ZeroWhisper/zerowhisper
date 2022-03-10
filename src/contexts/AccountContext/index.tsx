import { createContext, useEffect, useState } from 'react';

interface Account {
  id: number;
  name: string;
  email: string;
}

interface AccountsContextData {
  accountList: Account[];
}

export const AccountsContext = createContext<AccountsContextData>(
  {} as AccountsContextData,
);

export function AccountsProvider({ children }: any) {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/login')
      .then(response => response.json())
      .then(data => console.log('Ola mundo', data));
  }, []);

  return (
    <AccountsContext.Provider value={{ accountList: accounts }}>
      {children}
    </AccountsContext.Provider>
  );
}
