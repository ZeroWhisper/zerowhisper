import styled, { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components/native';

export const LocalStyles = createGlobalStyle`
  & > * {
    font-family: 'Roboto', 'Inter', sans-serif;
  }

  body {
    background-color: red;
  }

  .socialdashboard {
    display: flex;
    flex-direction: row;
  }
`;

export const Container = styled.div`
  background-color: #181a22;
  height: 100vh;
`;
