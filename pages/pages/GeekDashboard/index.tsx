import React from 'react';

import GeekHead from './GeekHead';
import GeekBody from './GeekBody';

const GeekDashboard: React.FC = _props => {
  return (
    <React.Fragment>
      <GeekHead />
      <GeekBody />
    </React.Fragment>
  );
};

export default GeekDashboard;
