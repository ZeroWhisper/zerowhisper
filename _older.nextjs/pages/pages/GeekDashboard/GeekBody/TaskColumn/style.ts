import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  padding: 10px 20px;
  width: 380px;
  border-right: 1px solid #eaeaea;

  display: flex;
  flex-direction: column;
  /* flex-shrink: 0; */
  flex-grow: 0;

  & > header {
    padding-bottom: 20px;
  }
`;
