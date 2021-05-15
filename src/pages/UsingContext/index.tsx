import React, { useContext } from 'react';
// import * as Redux from 'react-redux';
import {
  AppGlobalProvider,
  store as AppGlobalContext,
} from '@/contexts/app_global';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

// import * as S from './style';

function UsingContext(_props: IUsingContext) {
  // const {} = _props;

  return (
    <AppGlobalProvider>
      <p>teste 123 </p>
      <Switch>
        <Route path={'/context/1'}>
          <p>PAGE 1</p>
          <Link to={'/context/2'}>Go To</Link>
          <InnerButton />
        </Route>
        <Route path={'/context/2'}>
          <p>PAGE 2</p>
          <InnerResult />
        </Route>
      </Switch>
    </AppGlobalProvider>
  );
}

const InnerButton = () => {
  const { state, actions } = useContext(AppGlobalContext);

  const nextCount = (state.count || 0) + 1;

  return <button onClick={() => actions?.counter(nextCount)}>CLICK ME</button>;
};

const InnerResult = () => {
  const { state } = useContext(AppGlobalContext);

  return <div>Result: {state.count}</div>;
};

interface IUsingContext extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default UsingContext;
