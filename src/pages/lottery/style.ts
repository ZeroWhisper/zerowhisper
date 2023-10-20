import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 24rem;
  border: 1px solid red;

  .board-game {
    display: flex;
    padding: 2rem;
    gap: 1rem;
  }

  .game {
    display: flex;
    border: 1px solid gold;
    flex-direction: column;
    background-color: #82967e;

    > span {
      display: flex;
      justify-content: center;
    }

    > div {
      display: flex;
      max-width: 7.5rem;
      flex-wrap: wrap;

      > span {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid white;
      }
    }
  }
`;
