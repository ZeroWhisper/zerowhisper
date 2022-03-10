import React from 'react';
// import * as Redux from 'react-redux';

import * as S from './style';

function ComponentName(_props: IComponentName) {
  const { children, snow_size } = _props;
  // tes;

  return (
    <S.Container>
      {/* <div className="snowflakes" aria-hidden="true"> */}
      {/* <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div> */}

      {Array.from({ length: snow_size }).map(() => (
        <>
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
          <div className={'snowflake'} />
          <div className={'snowflake sweak'} />
          <div className={'snowflake mweak'} />
        </>
      ))}
      {/* </div> */}

      {children}
    </S.Container>
  );
}

interface IComponentName extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  snow_size: number;
}

export default ComponentName;
