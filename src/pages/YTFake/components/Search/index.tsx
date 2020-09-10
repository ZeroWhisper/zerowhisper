import React from 'react';
import * as Redux from 'react-redux';
import { GrSearch } from 'react-icons/gr';

import { RootState } from '~/store/modules/rootReducer';
import * as ActionsYT from '~/store/modules/yt/actions';

import { Content } from './style';

// const c = new Set();

const Search: React.FC = props => {
  const dispatch = Redux.useDispatch();

  const { loading } = Redux.useSelector((state: RootState) => state.yt);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(ActionsYT.request());
    },
    [dispatch],
  );

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   dispatch(ActionsYT.request());
  // }

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // console.tron.log('FIZ SUBMIT', e);
      const { value } = e.currentTarget;
      dispatch(ActionsYT.set({ key: 'buscar', value }));
    },
    [dispatch],
  );

  // Exemplo de como testar o useCallback
  // c.add(handleSubmit);
  // console.log(c.size);

  // console.log('TESTE', form);

  if (loading) {
    return (
      <div>
        <span>LOADING....</span>
      </div>
    );
  }

  return (
    <Content onSubmit={handleSubmit}>
      <div>
        <GrSearch />
        <input type="text" placeholder="Digite algo" onChange={handleSearch} />
      </div>
      <button type="submit">Enviar</button>
    </Content>
  );
};

export default Search;
