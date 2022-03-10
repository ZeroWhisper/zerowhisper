import { RootContexts } from 'contexts/_RootContexts';
import { NewTransactionModal } from 'components/NewTransactionModal';
import { Dashboard } from 'pages/Dashboard';

import { GlobalStyle } from 'styles/global';

export function App() {
  return (
    <RootContexts>
      <NewTransactionModal />
      <Dashboard />
      <GlobalStyle />
    </RootContexts>
  );
}
