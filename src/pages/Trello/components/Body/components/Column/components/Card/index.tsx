import React from 'react';

import { Container, Label } from './style';

const randommm = 'https://picsum.photos/200/300';

const Card: React.FC = _props => {
  // const ref = React.useRef();

  // const [{ isDragging }, dragRef] = useDrag({
  //   item: { type: 'CARD' },
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  // const [, dropRef] = useDrop({
  //   accept: 'CARD',
  //   hover: (item, monitor) => {
  //     console.log('DROPEI', item);
  //   },
  // });

  // dragRef(dropRef(ref));

  return (
    <Container>
      <header>
        <Label color={'pink'} />
      </header>
      <p>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla
      </p>
      <img src={randommm} alt={'Just a random source for example'} />
    </Container>
  );
};

export default Card;
