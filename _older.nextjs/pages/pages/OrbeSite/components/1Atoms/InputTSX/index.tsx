import React from 'react';
// import * as Redux from 'react-redux';

import * as S from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  penca?: Number;
}

export interface IInputTSX {
  Icon?: React.ReactNode;
  inputProps?: InputProps;
  containerProps?: S.ContainerProps;
  iconProps?: S.IconProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {};
}

function InputTSX(props: IInputTSX) {
  const { Icon, containerProps, iconProps, inputProps, onChange } = props;

  return (
    <S.Container {...containerProps}>
      {props?.Icon && <S.Icon {...iconProps}>{props?.Icon}</S.Icon>}
      <S.Input type={'text'} onChange={onChange} {...inputProps} />
    </S.Container>
  );
}

export default InputTSX;
