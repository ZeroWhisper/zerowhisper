import React from 'react';
import { MdAdd } from 'react-icons/md';

import Card from './components/Card';

import { Container } from './style';

const Column: React.FC = _props => {
  return (
    <Container>
      <header>
        <h2>sub title</h2>
        <button type="button">
          <MdAdd size={24} color={'#fff'} />
        </button>
      </header>
      <ul>
        {Array.from({ length: Math.round(Math.random() * 10) }).map((e, i) => (
          <Card key={String(i)} />
        ))}
      </ul>
    </Container>
  );
};

export default Column;
