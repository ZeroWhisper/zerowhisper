import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 92px;

  background-color: #090c15;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex: 1;
    max-width: 1000px;

    li {
      padding: 5px 15px;
      cursor: pointer;
      /* border: 1px solid red; */

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
