import { FormEvent, ReactNode } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import { useNewTransaction } from 'contexts/NewTransactionContext';

import { Container, CustomModalStyle } from './style';

Modal.setAppElement('#root');

// SOURCE: https://github.com/reactjs/react-modal
export function NewTransactionModal(_props: NewTransactionModalProps) {
  const {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    setForm,
    newTransactionForm,
    createTransaction,
  } = useNewTransaction();

  function handleNewTransactionModalPost(event: FormEvent) {
    event.preventDefault();
    console.log('PREVENT');
    createTransaction();
  }

  return (
    <>
      <CustomModalStyle />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName={'react-modal-overlay'}
        className={'react-modal-content'}
      >
        <Container activeButton={newTransactionForm.type}>
          <div className={'modal-close'}>
            <FaTimes
              size={16}
              color={'#c7c7c7'}
              onClick={handleCloseNewTransactionModal}
            />
          </div>

          <h2>Nova Transação</h2>

          <div className={'modal-input'}>
            <input
              type="text"
              name="title"
              id="title"
              placeholder={'Título'}
              onChange={event => {
                setForm({ [event.target.name]: event.target.value });
              }}
              defaultValue={newTransactionForm.title}
            />
          </div>

          <div className={'modal-input'}>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder={'Valor em R$'}
              onChange={event =>
                setForm({ [event.target.name]: Number(event.target.value) })
              }
              defaultValue={newTransactionForm.amount}
            />
          </div>

          <div className={'modal-input'}>
            <button
              type={'button'}
              onClick={() => setForm({ type: 'deposit' })}
            >
              <FaRegArrowAltCircleUp size={24} color={'green'} />
              <span>Entrada</span>
            </button>

            <button
              type={'button'}
              onClick={() => setForm({ type: 'withdraw' })}
            >
              <span>Saídas</span>
              <FaRegArrowAltCircleDown size={24} color={'red'} />
            </button>
          </div>

          <div className={'modal-input'}>
            <input
              type="text"
              name="category"
              id="category"
              placeholder={'Categoria'}
              onChange={event => {
                setForm({ [event.target.name]: event.target.value });
              }}
              defaultValue={newTransactionForm.category}
            />
          </div>

          <div className={'modal-input'}>
            <button type="submit" onClick={handleNewTransactionModalPost}>
              Cadastrar
            </button>
          </div>
        </Container>
      </Modal>
    </>
  );
}

interface NewTransactionModalProps {
  children?: ReactNode;
}
