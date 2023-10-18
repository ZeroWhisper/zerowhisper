import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  border: 1px solid red;

  padding: 0.5rem 1rem;

  .input-core {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

    .input-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      > input {
        border: 1px solid #eaeaea;
        background-color: transparent;
        padding: 0.75rem 0.5rem;
        border-radius: 1.25rem;
      }
    }
  }

  .box-output {
    margin: 1rem;
    min-width: 15rem;
  }
`;
