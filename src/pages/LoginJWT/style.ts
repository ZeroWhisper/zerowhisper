import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  /* flex: 1; */
  border: 1px solid red;
  min-width: 600px;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div`
  display: flex;
  /* flex-shrink: 0; */
  padding: 30px 50px;
  border: 0.1px solid white;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  button {
    height: 30px;
    width: 30px;
    /* border-style: 0.1px solid #eaeaea; */
    border-style: none;
    border-radius: 50%;

    :hover {
      background-color: blue;
      color: white;
    }
  }
`;

export const LoginButton = styled.button`
  /* border-style: none; */
  background-color: white;
  border: 1px solid blue;
  border-radius: 20px;
  height: 30px;
  width: 120px;
  /* padding: 5px 10px; */
`;
