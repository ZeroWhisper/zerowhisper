import styled from 'styled-components';
import { css_box_shadow } from '@/styles';

export const Container = styled.button`
  height: 60px;
  background-color: white;
  width: 120px;

  display: flex;
  align-items: center;
  padding: 0 10px;

  ${css_box_shadow};

  border: 1px solid #eaeaea;
  border-radius: 8px;

  & > * {
    cursor: pointer;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    cursor: pointer;
  }

  & > label {
    border-style: none;
    background-color: transparent;
  }
`;
