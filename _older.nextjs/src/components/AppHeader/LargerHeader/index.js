import React from 'react';
import { Link } from 'react-router-dom';

const LargerHeader = () => {
  return (
    <ul>
      <li>
        <Link to={'/example'}>HOME</Link>
      </li>
      <li>
        <Link to={'/css'}>CSS</Link>
      </li>
      <li>
        <Link to={'/contact'}>CONTATO</Link>
      </li>
    </ul>
  );
};

export default LargerHeader;
