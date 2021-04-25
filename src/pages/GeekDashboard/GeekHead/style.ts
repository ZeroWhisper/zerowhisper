import styled from 'styled-components';

import colors from '@/styles/colors';
// import styled from 'styled-components/native';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  height: 100px;
  background-color: ${colors.background.might};
  border-bottom: 1.5px solid rgb(37, 41, 41);

  padding: 0 30px;

  h2 {
    color: white;
  }

  span {
    padding: 0 10px;
  }
`;
