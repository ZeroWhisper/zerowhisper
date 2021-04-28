import React from 'react';
import { Redirect } from 'react-router';
// import * as Redux from 'react-redux';

// import * as S from './style';

function PrivateRoute(_props: IPrivateRoute) {
  const { isLogged, redirect, component, children } = _props;

  if (!isLogged) {
    return <Redirect to={redirect} />;
  }

  if (component) {
    return component;
  }

  return children;
}

interface IPrivateRoute extends React.HTMLAttributes<HTMLDivElement> {
  isLogged: boolean;
  redirect: string;
  children?: React.ReactNode;
  component?: React.ReactNode;
}

export default PrivateRoute;
