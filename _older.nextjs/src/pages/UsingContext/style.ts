import styled from 'styled-components';
// import styled from 'styled-components/native';

export const TopBar = styled.div`
  display: flex;
  /* flex: 1; */

  height: 100px;
  border: 1px solid red;

  .active {
    color: red !important;
  }

  & > div {
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;
  }
`;
