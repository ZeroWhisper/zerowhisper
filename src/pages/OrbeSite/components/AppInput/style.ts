import styled from 'styled-components';

export interface ContainerProps {
  width?: string | number;
}

export const Container = styled.div<ContainerProps>`
  height: 60px;
  /* margin: 10px; */
  border-radius: 8px;
  /* background-image: radial-gradient(); */
  background-color: white;

  display: flex;
  align-items: center;
  padding: 0 10px;
  width: ${props => props.width || '100%'};
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
  /* font-family: Roboto; */
  font-weight: bold;

  width: 100%;
`;
