import React from 'react';
// import * as Redux from 'react-redux';

import * as S from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IInputTSX {
  Icon?: React.ReactNode;
  inputProps?: InputProps;
  containerProps?: S.ContainerProps;
  iconProps?: S.IconProps;
}

function InputTSX(props: IInputTSX) {
  return (
    <S.Container {...props.containerProps}>
      {props?.Icon && <S.Icon {...props.iconProps}>{props?.Icon}</S.Icon>}
      <S.Input type={'text'} {...props.inputProps} />
    </S.Container>
  );
}

export default InputTSX;
