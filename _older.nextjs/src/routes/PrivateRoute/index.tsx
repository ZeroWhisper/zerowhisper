import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
// import * as Redux from 'react-redux';

// import * as S from './style';

function PrivateRoute(_props: IPrivateRoute) {
  const { isLogged, redirect, component, children } = _props;

  if (!isLogged) {
    return <Redirect to={redirect} />;
  }

  if (component) {
    return (
      <Route exact path={'/'}>
        {component}
      </Route>
    );
  }

  return (
    <Route exact path={'/'}>
      {children}
    </Route>
  );
}

interface IPrivateRoute extends React.HTMLAttributes<HTMLDivElement> {
  isLogged: boolean;
  redirect: string;
  children?: React.ReactNode;
  component?: React.ReactNode;
}

export default PrivateRoute;
