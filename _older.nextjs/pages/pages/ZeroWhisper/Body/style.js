import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: flex;
  flex: 1;

  padding: 10px;

  justify-content: center;
  flex-direction: column;

  max-width: 1000px;

  h3 {
    border: 1px solid red;
  }

  section {
    display: flex;
    flex: 1;

    max-height: 250px;

    /* flex-direction: column; */

    span {
      /* align-items: center;
      justify-content: center; */
    }

    div {
      /* display: flex; */
      flex: 4;
      /* border: 1px solid gold; */
      /* max-width: 300px; */
    }
  }
`;
