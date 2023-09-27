import styled, { createGlobalStyle, css } from 'styled-components';
// import styled from 'styled-components/native';

export const CustomModalStyle = createGlobalStyle`
  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 580px;

    padding: 2rem 3rem;
    border-radius: 0.25rem;
    background-color: whitesmoke;
  }
`;

interface FormProps {
  activeButton: string;
}

export const Container = styled.form<FormProps>`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .modal-close {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    svg:hover {
      cursor: pointer;
    }
  }

  .modal-input {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;

    input {
      flex: 1;
      padding: 1.5rem;
      font-size: 1rem;
      border: 1px solid #eaeaea;
      border-radius: 0.25rem;

      ::placeholder {
        color: #c7c7c7;
      }

      :hover {
        filter: brightness(0.9);
      }
    }
  }

  button[type='button'] {
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;

    padding: 1.5rem;
    background-color: white;
    border-radius: 0.25rem;

    &:first-child {
      margin-right: 0.5rem;
      ${({ activeButton }) => {
        if (activeButton === 'deposit')
          return css`
            background-color: #00cc0040;
          `;
      }};

      transition: background-color 0.5s;

      :hover {
        background-color: #00cc00aa;
      }
    }

    &:last-child {
      ${({ activeButton }) => {
        if (activeButton === 'withdraw')
          return css`
            background-color: #ff000040;
          `;
      }};

      transition: background-color 0.5s;

      :hover {
        background-color: #cc0000aa;
      }
    }

    span {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }

  button[type='submit'] {
    padding: 1.5rem;
    background-color: lightgreen;

    font-size: 1rem;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 0.25rem;

    flex: 1;
    justify-content: center;
    align-items: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
