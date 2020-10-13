import React from 'react';
// import * as Redux from 'react-redux';

import * as S from './style';

function InputJS(props) {
  const { containerProps, iconProps, inputProps, Icon } = props;

  return (
    <S.Container {...containerProps}>
      {Icon && (
        <span {...iconProps}>
          <Icon />
        </span>
      )}
      <input type="text" {...inputProps} />
    </S.Container>
  );
}

export default InputJS;
