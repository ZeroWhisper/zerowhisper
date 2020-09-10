import React from 'react';

import { Content } from './style';

const Hints: React.FC = (props) => {
  return (
    <Content>
      <h3>Forma de se criar a estrutura FLUX</h3>
      <p>
        Os arquivos dentros do modules são: actions, reducer, types e index.
      </p>
    </Content>
  );
};

export default Hints;
