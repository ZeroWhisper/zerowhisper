import React from 'react';
// import * as Redux from 'react-redux';

// import * as S from './style';

function PrivateRoute(_props: IPrivateRoute) {
  // const {} = _props;

  return <React.Fragment>I AM PrivateRoute</React.Fragment>;
}

interface IPrivateRoute extends React.HTMLAttributes<HTMLDivElement> {}

export default PrivateRoute;
