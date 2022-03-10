import React from 'react';

import * as S from './style';

const my_fac = 'https://www.facebook.com/marcos.zw10/';
const my_pic =
  'https://scontent.fbnu1-1.fna.fbcdn.net/v/t31.0-8/26850781_1599546343470709_7148794200202495528_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=bvxHyrYNDuwAX-Wg8sK&_nc_ht=scontent.fbnu1-1.fna&oh=25302c0c4ae3519f5ecff1e4a21799e8&oe=5FD1C571';

const Photo = props => {
  function redirect() {
    window.location = my_fac;
  }
  return (
    <S.Container>
      <img src={my_pic} alt="myself" onClick={redirect} />
    </S.Container>
  );
};

export default Photo;
