import React from 'react';

import { Container, Content } from './style';

const ClickExample: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <input type="text" name="server" />
          <input type="text" name="login" />
          <input type="password" name="password" />
          <button type="submit">entrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default ClickExample;
