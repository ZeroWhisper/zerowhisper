import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  /* border: 1px solid red; */

  form {
    margin: 10px;

    * {
      padding: 4px 10px;
    }
  }
`;

export const VideoList = styled.div``;

export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  border: 1px solid white;
  border-radius: 20px;

  margin: 25px;

  span {
    padding: 10px;
    color: white;
  }
`;
