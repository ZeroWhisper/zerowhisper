import React from 'react';
// import * as Redux from 'react-redux';
// import { View, Text } from 'react-native';

import * as S from './style';

function ButtonJS(props) {
  const { labelProps, iconProps, buttonProps, children, onClick, Icon } = props;

  return (
    <S.Container onClick={onClick} {...buttonProps}>
      {Icon && (
        <span {...iconProps}>
          <Icon />
        </span>
      )}
      <label {...labelProps}>{children}</label>
    </S.Container>
  );
}

export default ButtonJS;
