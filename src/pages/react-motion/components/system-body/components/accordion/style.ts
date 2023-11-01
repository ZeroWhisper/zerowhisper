import styled from "styled-components";

export const AccordionContainer = styled.div`
  .accordion-inside {
    background-color: lightgreen;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    overflow: hidden;
    color: black;

    > button {
      font-size: 1.25rem;
      font-weight: 500;
      width: 100%;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-content {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      margin-top: 1rem;
    }
  }
`;
