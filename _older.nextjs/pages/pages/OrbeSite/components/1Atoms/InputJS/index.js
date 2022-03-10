import React from 'react';
// import * as Redux from 'react-redux';

import * as S from './style';

function InputJS(props) {
  let { containerProps, iconProps, inputProps, onChange, Icon } = props;

  // containerProps = {
  //   onClick: e => console.log('SOCORRO LYANDRA!'),
  //   onChange: e => {},
  //   title: 'LOTE É O MELHOR PROJETO',
  //   alt: 'ALT',
  // };

  return (
    <S.Container
      {...containerProps}
      // onClick={containerProps.onClick}
      // onChange={containerProps.onChange}
      // title={containerProps.title}
      // alt={containerProps.alt}
    >
      {Icon && (
        <span {...iconProps}>
          <Icon />
        </span>
      )}
      <input type="text" {...inputProps} onChange={onChange} />
    </S.Container>
  );
}

export default InputJS;
