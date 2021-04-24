import { css } from 'styled-components';

export const css_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const css_box_shadow_white = css`
  /* params: cor largura_x largura_y blur */
  box-shadow: rgba(255, 255, 255, 0.5) 3px 3px 2px;
`;

export const css_box_shadow = css`
  /* params: cor largura_x largura_y blur */
  box-shadow: rgba(70, 70, 70, 0.5) 3px 3px 2px;
`;

export const css_box_shadow_blue = css`
  /* params: cor largura_x largura_y blur */
  box-shadow: rgb(0, 115, 183) 0px 0px 6px;
`;

export const css_width_page = css`
  display: flex;
  flex: 1;
`;

export const css_display_flex_full = css`
  display: flex;
  flex: 1;
`;

export const css_margin_media_query = css`
  margin: 0 10px;
  border: 1px solid gold;

  @media only screen and (min-width: 600px) {
    margin: 0 10%;
    border: 1px solid red;
  }

  @media only screen and (min-width: 1000px) {
    margin: 0 15%;
    border: 1px solid green;
  }
`;
