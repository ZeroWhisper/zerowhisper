import React from 'react';
import Modal from 'react-modal';

import AppTemplate from '~/components/AppTemplate';

import Box from './Box';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalWithFunctionClose = () => {
  const [open, setOpen] = React.useState(false);

  function log(log) {
    console.log(log);
  }

  function overrideSetOpen(log) {
    setOpen(false);
    log(log);
  }

  return (
    <AppTemplate>
      <div>
        <button onClick={() => setOpen(true)}>OK</button>
      </div>
      <Modal
        isOpen={open}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        contentLabel="Example Modal"
      >
        <Box onClose={overrideSetOpen.bind(log)} />
      </Modal>
    </AppTemplate>
  );
};

export default ModalWithFunctionClose;
