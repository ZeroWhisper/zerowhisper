import styled from 'styled-components';
import { css_width_page } from '~/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;

  section {
    ${css_width_page};
    padding: 10px;
  }
`;
