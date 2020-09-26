import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const ListGrid = styled.div`
  display: grid !important;
  grid-gap: 5px;

  /* https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/ */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 150px;

  /* grid-template-columns: repeat(auto-fill, minmax(150px, 200px)); */
  /* grid-template-columns: repeat(auto-fill, 200px); */

  /* padding: 0; */

  div {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: flex;
    flex: 1;
    width: 100%;
    height: 100%; */
  }
`;

// https://github.com/MilenaCarecho/30diasDeCSS/tree/master/Desafios/dia%2001
export const SpanBox1 = styled.span`
  position: relative;

  width: 60px;
  height: 60px;

  transform: rotate(-30deg) skew(25deg);
  background: #ccc;

  cursor: pointer;

  span {
    position: absolute;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    transition: 0.5s;
  }

  &:hover {
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
    background: lightseagreen;

    span:nth-child(5) {
      justify-content: center;
      align-items: center;

      transform: translate(40px, -40px);
      opacity: 1;
      background: #e4405f;
    }
    span:nth-child(4) {
      transform: translate(30px, -30px);
      opacity: 0.8;
      background: #0077b5;
    }
    span:nth-child(3) {
      transform: translate(20px, -20px);
      opacity: 0.6;
      background: #dd4b39;
    }
    span:nth-child(2) {
      transform: translate(10px, -10px);
      opacity: 0.4;
      background: #55acee;
    }
    span:nth-child(1) {
      transform: translate(0, 0);
      opacity: 0.2;
      background: #3b5999;
    }
  }
`;

// https://github.com/MilenaCarecho/30diasDeCSS/tree/master/Desafios/dia%2002
export const SpanBox2 = styled.span`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  position: relative;
  height: 100%;

  span:nth-child(1) {
    /* position: absolute; */
    color: black;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
  }

  span:nth-child(2) {
    position: absolute;
    border-radius: 50%;

    height: 120px;
    width: 120px;

    box-shadow: 0 4px 0 #262626;
    background: transparent;
    animation: animate 1s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpanBoxCustom1 = styled.span`
  position: relative;
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  span {
    position: relative;
    height: 40px;
    border-radius: 15px;
    background-color: white;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 90px;
    transition: width 1s, transform 2s;

    div {
      border: none;
      transform: rotate(180deg);
    }

    cursor: pointer;

    :hover {
      background-color: lightgray;
      transform: rotate(180deg);
      width: 110px;
      transform: width;
    }
  }
`;

export const SpanBoxCustom2 = styled.span`
  position: relative;
  height: 100%;
  width: 100%;

  span {
    :nth-child(1) {
      animation-delay: -4s;
    }
    :nth-child(2) {
      animation-delay: -2s;
    }
  }

  span {
    position: absolute;
    background-color: white;

    width: 35px;
    height: 35px;

    top: 3%;
    left: 38%;

    animation-name: example;
    animation-duration: 6s;
    animation-iteration-count: infinite;

    @keyframes example {
      0% {
        background-color: red;
        top: 3%;
        left: 38%;
      }
      33% {
        background-color: green;
        top: 70%;
        left: 70%;
      }
      66% {
        background-color: blue;
        top: 70%;
        left: 3%;
      }
      100% {
        background-color: red;
        top: 3%;
        left: 38%;
      }
    }
  }
`;

export const SpanBox3 = styled.span`
  position: relative;
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  span {
    height: 40px;
    width: 40px;
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-bottom: 6px solid black;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const SpanBox4 = styled.span`
  position: relative;
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  span {
    position: relative;
    border: 1px solid #777;
    width: 75px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 1s;
    overflow: hidden;

    &:before {
      content: '✔️';
      color: rgb(0, 90, 0);
      background-color: #c1f1c8f6;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      transform: translateY(-100%);
      transition: all 0.5s;
    }

    &:hover:before {
      transform: translateY(0);
    }
  }
`;
