import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import { useNewTransaction } from 'contexts/NewTransactionContext';

import * as S from './style';

export function Header() {
  const { handleOpenNewTransactionModal } = useNewTransaction();

  return (
    <S.Container>
      <S.Content>
        <div className={'header-top'}>
          <div>
            <span className={'header-logo'}>
              <RiMoneyDollarCircleFill color={'lightgreen'} size={36} />
              <h4>Awesome App</h4>
            </span>
          </div>
          <div>
            <button onClick={handleOpenNewTransactionModal}>
              Nova Transação
            </button>
          </div>
        </div>
        <div className={'header-bottom'}></div>
      </S.Content>
    </S.Container>
  );
}
