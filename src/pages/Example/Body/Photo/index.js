import React from 'react';

import * as S from './style';

const my_fac = 'https://www.facebook.com/marcos.zw10/';
const my_pic =
  'https://scontent.fccm1-1.fna.fbcdn.net/v/t31.0-8/18237897_1353277918097554_8793432821379965656_o.jpg?_nc_cat=111&_nc_sid=a4a2d7&_nc_ohc=O85TnUhN9pUAX8ihx0R&_nc_ht=scontent.fccm1-1.fna&oh=ea05c662e51613de7453f93044b8ce7d&oe=5F7D6A9D';

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
