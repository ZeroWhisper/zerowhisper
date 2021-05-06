import React from 'react';
import { css_box_shadow } from '@/styles';
import styled from 'styled-components';

// export interface ContainerProps extends React.HTML<HTMLElement> {}
export interface ContainerProps {
  width?: string | number;
}

export const Container = styled.div<ContainerProps>`
  height: 60px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: white;

  display: flex;
  align-items: center;
  padding: 0 10px;
  width: ${props => props.width || '100%'};
  ${css_box_shadow};
`;

export interface IconProps {}

export const Icon = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

export const Input = styled.input`
  outline: none;
  border-style: none;

  background-color: inherit;
  color: #333;
  caret-color: blueviolet;
  font-size: 25px;
  font-weight: bold;
  margin-left: 3px;

  width: 100%;
`;
