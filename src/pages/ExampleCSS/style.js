import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  /* grid-template-columns: repeat(auto-fill, 200px); */
  grid-auto-rows: 150px;

  padding: 0;

  div {
    border: 1px solid red;
    border-radius: 15px;
    /* display: flex;
      flex: 1; */
    width: 100%;
    height: 100%;
  }
`;
