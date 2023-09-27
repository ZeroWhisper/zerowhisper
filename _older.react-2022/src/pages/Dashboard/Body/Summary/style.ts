import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -8rem;

  .summary-card {
    background-color: white;
    padding: 2rem;
    border-radius: 0.25rem;
    color: #222222;
    border: 0.5px solid #eaeaea;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;

      span {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    strong {
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }
  }

  .summary-total {
    background-color: lightgreen;
    color: white;
  }
`;
