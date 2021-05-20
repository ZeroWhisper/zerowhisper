import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: flex;

  height: 120px;
  /* border: 1px solid red; */
  background-color: white;

  & > div {
    display: flex;
    flex: 1;
  }

  & > :nth-child(1) {
    border: 1px solid black;
  }

  /* & > :nth-child(1) {
    justify-content: center;
    align-items: center;

    flex: 0.4;
  } */

  & > :nth-child(2) {
  }

  & > :nth-child(3) {
    align-items: center;
    justify-content: flex-end;

    & > div {
      height: 90px;
      width: 90px;
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }

  .classImageGoogle {
    height: 40px;
    width: 115px;
  }
`;

export const DivLogo = styled.div`
  justify-content: center;
  align-items: center;

  flex: 0.4;
`;

export const MyDivLogo = styled(DivLogo)`
  justify-content: flex-end;

  background-color: blue;
`;

export const DivSearch = styled.div`
  justify-content: center;
  align-items: center;
  flex: 2;

  div {
    display: flex;
    flex-direction: row;
    flex: 1;

    align-items: center;
    margin: 0 10px;

    height: 40px;
    background-color: white;
    border-radius: 40px;
    border: 0.5px solid gray;
    /* border: 1px solid green; */
    /* box-shadow: rgba(70, 70, 70, 0.5) 3px 3px 2px; */
    box-shadow: 5px 5px 15px -6px #000000;
    transition: box-shadow 2s;

    :hover {
      box-shadow: 5px 5px 15px 5px #000000;
      transition: box-shadow 2s;
    }

    svg {
      margin-right: 10px;

      cursor: wait;
    }

    input {
      border: none;
      flex: 1;

      padding: 0 10px;
      margin-left: 10px;

      ::placeholder {
        color: red;
      }
    }
  }
`;
