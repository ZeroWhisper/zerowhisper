import React from 'react';
import { BsStar } from 'react-icons/bs';

import AppTemplate from '~/components/AppTemplate';

import * as S from './style';

const ExampleCSS = () => {
  return (
    <AppTemplate>
      <S.Container>
        <div>Em construção</div>
        <S.ListGrid>
          <div>
            <S.SpanBox1>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <BsStar color={'blue'} />
              </span>
            </S.SpanBox1>
          </div>
          <div>
            <S.SpanBox2>
              <span>LOADING</span>
              <span></span>
            </S.SpanBox2>
          </div>
          <div>
            <S.SpanBoxCustom1 onClick={() => alert('Hello World')}>
              <span>
                <div>Button</div>
              </span>
            </S.SpanBoxCustom1>
          </div>
          <div>
            <S.SpanBoxCustom2>
              <span></span>
              <span></span>
              <span></span>
            </S.SpanBoxCustom2>
          </div>
          <div>
            <S.SpanBox3>
              <span></span>
            </S.SpanBox3>
          </div>
          <div>
            <S.SpanBox4>
              <span>HOVER</span>
            </S.SpanBox4>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </S.ListGrid>
      </S.Container>
    </AppTemplate>
  );
};

export default ExampleCSS;
