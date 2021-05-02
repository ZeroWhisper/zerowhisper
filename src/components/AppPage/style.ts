import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex: 1;

  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  /* border: 0.5px solid gray;
  margin: 10px; */

  color: gold;

  /* border: 1px solid white; */
`;

export const Card = styled.div`
  position: absolute;

  top: 529px;
  right: 403px;

  cursor: pointer;
  /* height: 60px;
  width: 45px; */
  height: 128px;
  width: 64px;
  border-radius: 2px;

  background-color: white;

  /* transform: skewX(-59deg); */
  /* transform: skew(50deg, -59deg); */

  /* transform:  */

  transform-style: preserve-3d;
  /** CANTO INFERIOR DIREITO */
  transform: rotateX(59deg) rotateY(-16deg) rotateZ(-32.5deg);

  // TESTES
  /* transform: rotateX(60deg) rotateY(-15deg) rotateZ(-32.5deg); */
`;
