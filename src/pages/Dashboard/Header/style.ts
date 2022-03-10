import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 18rem;
  justify-content: center;
  background-color: blueviolet;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 1120px;
  flex-direction: column;

  padding: 1rem 0;

  .header-top {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }

  .header-bottom {
    display: flex;
    flex: 4;
  }

  .header-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;

    h4 {
      padding: 0 5px;
    }
  }

  button {
    color: white;
    background-color: lightgreen;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
