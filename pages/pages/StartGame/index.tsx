import React from 'react';
import { Game, Scene, Text } from 'react-phaser-fiber';
//import * as Redux from 'react-redux';

import AppContainer from '@/components/AppContainer';

import { Content } from './style';

const StartGame: React.FC = props => {
  return (
    <AppContainer>
      <Content>
        <Game
          width={720}
          height={480}
          physics={{
            default: 'arcade',
          }}
        >
          <Scene sceneKey="main">
            <Text
              x={100}
              y={100}
              text="Hello World!"
              style={{ color: 'white' }}
            />
          </Scene>
        </Game>
      </Content>
    </AppContainer>
  );
};

export default StartGame;
