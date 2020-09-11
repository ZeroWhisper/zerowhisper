import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  flex-direction: column;

  /* border: 1px solid gold; */

  h2 {
    /* border: 1px solid red; */
    padding: 15px 0;
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
