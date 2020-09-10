import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: flex;
  flex: 1;

  padding: 10px;

  justify-content: center;

  section {
    display: flex;
    flex: 1;
    max-width: 1000px;

    max-height: 250px;

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
