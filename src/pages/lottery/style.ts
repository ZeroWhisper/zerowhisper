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

    flex-wrap: wrap;
  }

  .config-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  .game {
    display: flex;
    border: 1px solid gold;
    flex-direction: column;
    background-color: greenyellow;
    color: blueviolet;

    .prized {
      background-color: goldenrod;
    }

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
  .menus {
    display: flex;
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;
