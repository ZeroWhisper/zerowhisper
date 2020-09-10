import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  /* background-color: gray; */

  flex: 0 0 320px;
  /**
    O flex acima significa:
    flex-grow: 0; // Habilidade de crescer/esticar
    flex-shrink: 0; // Habilidade de diminuir/reduzir/encolher
    flex-basis: 320px; // Tamanho base do elemento
  */

  /* border: 2px solid red; */

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      height: 40px;
      width: 40px;
      /* border: none; */
      border-radius: 50%;
      background-color: #3b5bfd;
      border: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
