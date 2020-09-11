import styled from 'styled-components';
import colors from '~/styles/colors';
import { css_width_page } from '~/styles';

export const Container = styled.div`
  height: 100px;
  background-image: linear-gradient(90deg, ${colors.background.might}, #30384b);
  color: #fff;

  display: flex;
  justify-content: center;

  /* https://www.cssmatic.com/box-shadow */
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);

  div {
    ${css_width_page};
    flex: 1;

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
      }
    }
  }
`;
