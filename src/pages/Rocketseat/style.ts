import styled from 'styled-components';

// export const AppContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;

export const ContDiv = styled.div`
  width: 500px;
  justify-self: center;
  border: 1px solid purple;
  padding: 10px;
  margin: 10px;

  form {
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* max-width: 540px; */
  /* align-self: center; */
  justify-content: center;
  /* align-self: center;  */
  border: 1px solid white;
  height: 100px;
  /* justify-content: center;
  align-items: center; */
  /* max-width: 600px; */

  input {
    height: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    border: 1px solid #eaeaea;
    border-radius: 20px;
  }
`;
