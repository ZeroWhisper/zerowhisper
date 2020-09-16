import styled from 'styled-components';
import colors from '~/styles/colors';
import { css_width_page, css_margin_media_query } from '~/styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;

  background-image: linear-gradient(
    135deg,
    ${colors.background.might},
    #30384b
  );
  color: #fff;

  /* https://www.cssmatic.com/box-shadow */
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);

  div {
    ${css_width_page};
    ${css_margin_media_query};
    flex: 1;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      padding: 0 10px;

      li {
        font-size: 20px;
        font-weight: 400;

        text-decoration: underline;
        cursor: pointer;

        :nth-child(n) {
          margin-right: 20px;
        }

        a {
          text-decoration: none;
        }
      }
    }
  }
`;
