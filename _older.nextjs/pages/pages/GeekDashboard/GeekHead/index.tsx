import React from 'react';
import { MdDevices } from 'react-icons/md';

import { Container } from './style';

const Head: React.FC = (props) => {
  return (
    <Container>
      <span>
        <MdDevices size={25} />
      </span>
      <h2>GeekDashboard</h2>
    </Container>
  );
};

export default Head;
