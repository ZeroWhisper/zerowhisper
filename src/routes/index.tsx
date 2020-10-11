import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Rocketseat from '~/pages/Rocketseat';
import LoginJWT from '~/pages/LoginJWT';
import StartGame from '~/pages/StartGame';
import Example from '~/pages/Example';
import ClickExample from '~/pages/ClickExample';
import ModalWithFunctionClose from '~/pages/ModalWithFunctionClose';
import ExampleCSS from '~/pages/ExampleCSS';
import GeekDashboard from '~/pages/GeekDashboard';
import ZeroWhisper from '~/pages/ZeroWhisper';
import Contact from '~/pages/Contact';
import SocialDashboard from '~/pages/SocialDashboard';
import OrbeSite from '~/pages/OrbeSite';

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
      <Route path={'/modal'}>
        <ModalWithFunctionClose />
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
      <Route path={'/css'}>
        <ExampleCSS />
      </Route>
      <Route path={'/rocket'}>
        <Rocketseat />
      </Route>
      <Route path={'/contact'}>
        <Contact />
      </Route>
      <Route path={'/social'}>
        <SocialDashboard />
      </Route>
      <Route path={'/orbe'}>
        <OrbeSite />
      </Route>
    </Switch>
  );
};

export default Routes;
