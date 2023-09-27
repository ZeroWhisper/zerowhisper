import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.75rem;

    tr {
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      :first-child {
        border-radius: 0.25rem;
      }
    }

    th {
      color: #aaaaaa;
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      color: #ccc;
      background-color: white;
      border: none;

      &.deposit {
        color: green;
      }

      &.withdraw {
        color: red;
      }

      &:first-child {
        color: black;
      }
    }
  }
`;
