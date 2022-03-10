import styled, { css } from 'styled-components';
import colors from '@/styles/colors';
import { css_box_shadow_blue } from '@/styles';

const non_allow_selection = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

interface ContainerProps {
  isDragging?: boolean;
  isActive?: boolean;
}

export const Container = styled.li<ContainerProps>`
  position: relative;

  background-color: ${colors.background.might};
  border: none;
  border-radius: 20px;
  padding: 15px;
  padding-top: 25px;
  margin-bottom: 25px;
  font-size: 12px;
  cursor: grab;

  ${css_box_shadow_blue};
  ${non_allow_selection};

  ${props =>
    props.isDragging &&
    css`
      opacity: 0.1;
      cursor: grabbing;
      /* box-shadow: none; */

      & > * {
        opacity: 0;
      }
    `}

  ${props =>
    props.isActive &&
    css`
      background-color: yellowgreen;
    `}


  span > span {
    color: ${colors.fonts.secondary};
  }

  p {
    padding: 10px 0;
  }

  /* span {
    position: absolute;
    top: 0;
    left: 0;

    margin-top: -5px;
    margin-left: -5px;

    padding: 5px 12px;
    border-radius: 6px;
    background-color: ${colors.status.info};
  } */

  h2 {
    padding: 5px 0;
  }
`;

export const CardBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin-top: -5px;
  margin-left: -5px;

  padding: 5px 12px;
  border-radius: 6px;
  background-color: ${colors.status.info};
`;

export const Salary = styled.p`
  color: greenyellow;
  font-size: 1rem;
`;
