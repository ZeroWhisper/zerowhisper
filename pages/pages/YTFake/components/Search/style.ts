import styled from 'styled-components';

export const Content = styled.form`
  /* height: 150px; */
  /* width: 100%; */
  margin: 10px;
  display: flex;
  flex-direction: row;

  /* border: 1px solid black; */

  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;

    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 25px;
    background-color: white;

    input {
      display: flex;
      flex: 1;
      border-style: none;
      padding: 0 10px;
    }
  }

  button {
    border: 1px solid #eaeaea;
    border-radius: 20px;
    margin-left: 10px;
    min-width: 80px;

    :hover {
      border: 1px solid blue;
    }
  }
`;
