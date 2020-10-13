import React from 'react';
// import * as Redux from 'react-redux';
import { AiFillGithub } from 'react-icons/ai';

// import * as github from '~/services/api_github2';
// import TopBar from './components/TopBar';
// import AppInput from './components/AppInput';

import ButtonJS from './components/1Atoms/ButtonJS';
import InputJS from './components/1Atoms/InputJS';
import Row from './components/2Molecules/Row';

import * as S from './style';

function OrbeSite() {
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  // const [git, setGit] = React.useState(null);

  // React.useEffect(() => {
  //   (async () => {
  //     const response = await github.api.get(
  //       // github.replace('/repos/:owner/:repo/contents/:path', {
  //       github.replace('/repos/:owner/:repo', {
  //         owner: 'ZeroWhisper',
  //         repo: 'zerowhisper',
  //         path: 'README.md',
  //       }),
  //     );
  //     // const { data, status } = response;
  //     console.log('RESPONSE', response);

  //     setGit(response.data);
  //   })();

  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return (
  //     <S.Content>
  //       <S.Loading>Loading....</S.Loading>
  //     </S.Content>
  //   );
  // }

  return (
    <S.Content>
      {/* <TopBar>
        <AppInput
          inputProps={{ type: 'text', defaultValue: 'Olá mundo' }}
          containerProps={{ width: '300px' }}
          Icon={<AiFillGithub size={30} />}
        />
      </TopBar> */}
      {/* <TopBar /> */}
      {/* <AppInput
        inputProps={{ type: 'text', defaultValue: 'Olá mundo' }}
        containerProps={{ width: '300px' }}
        Icon={<AiFillGithub size={30} />}
      /> */}
      {/* I AM OrbeSite
      {git && <pre>{JSON.stringify(git, null, 2)}</pre>} */}
      <Row>
        <InputJS
          Icon={AiFillGithub}
          containerProps={{ style: { marginRight: 5 } }}
          inputProps={{
            onChange: (e: any) => {
              console.log(e.target.value);
            },
          }}
        />
        <ButtonJS
          Icon={AiFillGithub}
          buttonProps={{
            onClick: () => console.log('TESTE'),
          }}
          onClick={() => console.log('TESTE')}
        >
          Aperte
        </ButtonJS>
      </Row>
    </S.Content>
  );
}

export default OrbeSite;
