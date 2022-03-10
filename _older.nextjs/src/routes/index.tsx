import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AppPage from '@/components/AppPage';
import UsingContext from '@/pages/UsingContext';
import Google from '@/pages/Google';

// import Rocketseat from '@/pages/Rocketseat';
// import LoginJWT from '@/pages/LoginJWT';
// import StartGame from '@/pages/StartGame';
// import Example from '@/pages/Example';
// import ClickExample from '@/pages/ClickExample';
// import ModalWithFunctionClose from '@/pages/ModalWithFunctionClose';
// import ExampleCSS from '@/pages/ExampleCSS';
// import GeekDashboard from '@/pages/GeekDashboard';
// import ZeroWhisper from '@/pages/ZeroWhisper';
// import Contact from '@/pages/Contact';
// import SocialDashboard from '@/pages/SocialDashboard';
// import OrbeSite from '@/pages/OrbeSite';

// import styles from './style';

const Routes = (_props: any) => {
  // const {} = _props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <AppPage />
        </Route>
        <Route path={'/context'}>
          <UsingContext />
        </Route>

        <Route exact path={'/health'}>
          <p>OK</p>
        </Route>

        <Route exact path={'/google'}>
          <Google />
        </Route>

        {/* <Route path={'/geek'}>
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
      </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
