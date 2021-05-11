import React from 'react';
import Link from 'next/link';
// import * as Redux from 'react-redux';

// import * as S from './style';

function LLLL(_props: ILLLL) {
  // const {} = _props;

  return (
    <React.Fragment>
      I AM LLLL
      <Link href={'/dashboard'} as={'/dashboard'}>
        teste
      </Link>
    </React.Fragment>
  );
}

interface ILLLL extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default LLLL;
