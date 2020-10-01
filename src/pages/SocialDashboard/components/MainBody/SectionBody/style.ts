import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  padding: 10px 20px;

  display: flex;
  flex-direction: column;

  & > div {
    height: 180px;
    margin-bottom: 15px;
    background-color: #1e2234;
    border-radius: 6px;

    & > span {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-image: linear-gradient(to right, red, purple);
      /* background-image: linear-gradient(
        0deg,
        hsl(215, 60%, 65%),
        hsl(192, 64%, 60%)
      ) !important; */
      height: 5px;

      display: flex;
      flex: 1;
    }

    & > div {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;

      display: flex;
      flex: 1;
    }
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex: 1;

  padding: 20px;
  justify-content: center;

  /* border: 1px solid red; */

  & > div {
    display: flex;
    padding: 5px;
    flex-direction: column;

    justify-content: center;

    & > * {
      text-align: center;
      color: rgb(140, 165, 198);
    }

    & > a {
      display: flex;
      align-items: center;
      font-size: 12px;
    }

    & > h2 {
      font-size: 46px;
      padding: 5px 0;
      color: white;
    }

    & > h5 {
      letter-spacing: 5px;
      padding: 3px;
      text-transform: uppercase;
    }

    & > span {
      font-size: 12px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(85, 228, 187);
    }
  }
`;
