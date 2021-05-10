import React from 'react';
// import * as Redux from 'react-redux';

// import * as S from './style';

function Dashboard(_props: IDashboard) {
  // const {} = _props;

  return <React.Fragment>I AM Dashboard</React.Fragment>;
}

interface IDashboard extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default Dashboard;
