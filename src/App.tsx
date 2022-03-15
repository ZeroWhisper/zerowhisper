import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { RootContexts } from 'contexts/_RootContexts';
import { NewTransactionModal } from 'components/NewTransactionModal';
import { Dashboard } from 'pages/Dashboard';

import { GlobalStyle } from 'styles/global';

export function App() {
  return (
    <RootContexts>
      <NewTransactionModal />
      <BrowserRouter>
        <div>Teste</div>
        <nav>
          <Link to={'/dashboard'}>DASHBOARD</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(() => {
              return <div>Bem vindo!</div>;
            })()}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </RootContexts>
  );
}
