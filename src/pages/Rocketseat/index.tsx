import React from 'react';

import api_github from '~/services/api_github';
import AppContainer from '~/components/AppContainer';

import { ContDiv, List } from './style';

// eslint-disable-next-line
const Rocketseat: React.FC = (props) => {
  const [repo, setRepo] = React.useState('ZeroWhisper/nodejs-graphql');
  const [store, setStore] = React.useState<Repository[]>([]);

  async function handleForm(e: CustomForm): Promise<void> {
    e.preventDefault();
    console.log('TESTE', repo);

    const response = await api_github.get<Repository>(`/repos/${repo}`);
    setStore((st) => [...st, response.data]);
    console.log('LIST', store);
  }

  return (
    <AppContainer>
      <ContDiv>
        <form onSubmit={handleForm}>
          <div>Eu sou uma div</div>
          <input
            type="text"
            placeholder={'Digite o item de busca'}
            defaultValue={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
          <button type="submit">ENVIAR</button>
        </form>
        <List>
          {store.map((item, index) => {
            return <li key={index}>{item.full_name}</li>;
          })}
        </List>
      </ContDiv>
    </AppContainer>
  );
};

interface CustomForm extends React.FormEvent<HTMLFormElement> {}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export default Rocketseat;
