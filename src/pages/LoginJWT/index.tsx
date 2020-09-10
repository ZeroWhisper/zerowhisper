import React from 'react';

import { reducer, actions, stateInitial as initial } from '~/store_react';

import { Content, CenterBox, LoginButton } from './style';

const LoginJWT: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initial);

  function handlePlus() {
    console.debug('Plus', 'renderizei');
    dispatch(actions.plusAction());
  }

  function handleMinus() {
    console.debug('Minus', 'renderizei');
    dispatch(actions.minusAction());
  }

  return (
    <Content>
      <CenterBox>
        <span>Total: {state.counter}</span>
        <span>Clicks: {state.clicks}</span>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        {/* <LoginButton>Entrar</LoginButton> */}
      </CenterBox>
      <div>
        <LoginButton>TESTE</LoginButton>
      </div>
    </Content>
  );
};

export default LoginJWT;
