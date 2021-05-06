import React from 'react';

import SectionBody from './SectionBody';

import * as S from './style';

function MainBody() {
  return (
    <React.Fragment>
      <S.Container>
        <header>
          <h3>Social Media Dashboard</h3>
          <h5>Total Follower: 33333</h5>
        </header>
        <hr />
        <span>
          <label htmlFor="theme">Dark Mode</label>
          <input type="checkbox" name="theme" id="theme " />
        </span>
      </S.Container>
      <SectionBody />
    </React.Fragment>
  );
}

export default MainBody;
