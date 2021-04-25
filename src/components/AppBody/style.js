import styled from 'styled-components';
import { css_width_page, css_margin_media_query } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  /* justify-content: center; */

  ${css_margin_media_query}

  div {
    ${css_width_page};
    padding: 10px;
  }
`;
