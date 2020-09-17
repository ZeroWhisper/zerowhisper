import styled from 'styled-components';
import { css_width_page, css_margin_media_query } from '~/styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;

  background-image: linear-gradient(
    135deg,
    rgb(24, 26, 27, 0.5),
    rgba(48, 56, 75, 0.65)
  );
  color: #fff;

  /* https://www.cssmatic.com/box-shadow */
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);

  div {
    ${css_width_page};
    ${css_margin_media_query};
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      padding: 0 10px;

      li {
        position: relative;
        font-size: 20px;
        font-weight: 400;

        /* text-decoration: underline; */
        cursor: pointer;

        :nth-child(n) {
          margin-right: 20px;
        }

        a {
          text-decoration: none;
        }

        /* Fonte: https://paulund.co.uk/css-animation-link-underline */
        ::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          right: 0;
          background-color: #fff;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }

        :hover::after {
          visibility: visible;
          width: 100%;
        }
      }
    }
  }
`;
