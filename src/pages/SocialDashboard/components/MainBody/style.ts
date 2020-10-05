import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Container = styled.div`
  padding: 20px;

  header {
    padding: 5px 0;

    h3 {
    }
    h5 {
    }
  }

  span {
    display: flex;
    flex: 1;
    height: 55px;

    padding: 5px 0;
    align-items: center;
    justify-content: space-between;

    input {
      position: relative;
      appearance: none;
      background-color: white;
      background-image: linear-gradient(
        90deg,
        rgb(21, 93, 165),
        rgb(30, 159, 104)
      );
      height: 29px;
      width: 50px;
      border-radius: 25px;

      padding: 2px;
      padding-left: 3px;

      :after {
        content: '';
        position: absolute;

        background-color: red;
        height: 24px;
        width: 24px;
        border-radius: 50%;

        transition: transform 0.8s;
      }

      :hover:after {
        background-color: black;
        transform: translateX(calc(100% - 2px));
      }
    }
  }
`;
export const Container2 = styled.section``;
