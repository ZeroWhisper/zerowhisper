import React from 'react';

import Search from './components/Search';
import Body from './components/Body';

import { Content, Board } from './style';

const YTFake: React.FC = (props) => {
  return (
    <Content>
      <Board>
        <Search />
        <Body />
      </Board>
    </Content>
  );
};

export default YTFake;
