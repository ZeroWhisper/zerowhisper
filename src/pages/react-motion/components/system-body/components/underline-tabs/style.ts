import styled from "styled-components";

export const UnderlineTabsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  > button {
    padding: 0.75rem;
    background-color: gray;
    border: 0;
    cursor: pointer;
    flex-direction: column;

    .bar-animation {
      position: relative;
      transform: translateY(3px);
      width: 100%;
    }

    .black-bg {
      position: absolute;
      width: 100%;
      height: 0.15rem;
      background-color: white;
    }
  }
`;
