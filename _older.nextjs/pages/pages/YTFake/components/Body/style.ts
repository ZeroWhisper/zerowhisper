import styled from 'styled-components';

export const Content = styled.div`
  /* height: 150px; */
  /* width: 100%; */
  display: flex;
  flex-direction: row;

  margin: 10px;
`;

interface SideStyleProps {
  size?: integer;
}

export const Side = styled.div<SideStyleProps>`
  display: flex;
  flex: ${(props) => props.size || 1};

  border: 1px solid red;
`;
