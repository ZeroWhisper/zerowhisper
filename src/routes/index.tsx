import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import * as Redux from 'react-redux';
// import { View, Text } from 'react-native';

import Rocketseat from '~/pages/Rocketseat';
import LoginJWT from '~/pages/LoginJWT';
import StartGame from '~/pages/StartGame';
import Example from '~/pages/Example';
import ClickExample from '~/pages/ClickExample';
import YTFake from '~/pages/YTFake';
import Trello from '~/pages/Trello';
import GeekDashboard from '~/pages/GeekDashboard';
import ZeroWhisper from '~/pages/ZeroWhisper';

// import styles from './style';

const Routes: React.FC = props => {
  return (
    <Switch>
      <Route exact path={'/'}>
        {/* <Rocketseat /> */}
        <ZeroWhisper />
      </Route>
      <Route path={'/geek'}>
        <GeekDashboard />
      </Route>
      <Route path={'/trello'}>
        <Trello />
      </Route>
      <Route path={'/login'}>
        <LoginJWT />
      </Route>
      <Route path={'/game'}>
        <StartGame />
      </Route>
      <Route path={'/example'}>
        <Example />
      </Route>
      <Route path={'/click'}>
        <ClickExample />
      </Route>
      <Route path={'/ytfake'}>
        <YTFake />
      </Route>
      <Route path={'/rocket'}>
        <Rocketseat />
      </Route>
    </Switch>
  );
};

export default Routes;
