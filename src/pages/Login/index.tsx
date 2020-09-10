import React from 'react';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
// import * as Redux from 'react-redux';
// import a from 'gapi-script';

// let auth2 = await loadAuth2(clientId, scopes);
// let auth2 = await loadAuth2WithProps({ /* object with props from gapi */ });

import AppContainer from '~/components/AppContainer';

import { Content, VideoList, BoxLogin } from './style';

const clientId =
  '297300340076-4cbqnre0to4nihg4p5emqivbtcmsml4t.apps.googleusercontent.com';
const key = '8KJEqAS-9tjyAkD1pSey8lle';

// let scopes = {};

const Login: React.FC = (props) => {
  // const url = 'https://www.googleapis.com/youtube/v3';
  const [user, setUser] = React.useState<GoogleLoginResponse>();

  // const selector = Redux.useSelector((state) => state);

  return (
    <AppContainer>
      <Content>
        <BoxLogin>
          <form onSubmit={() => user}>
            <label htmlFor={'buscar-video'}>Buscar</label>
            <input type={'text'} name={'buscar-video'} />

            <button onClick={() => {}}>ZeroTube</button>
          </form>
          <GoogleLogin
            clientId={clientId}
            key={key}
            onSuccess={(response: GoogleLoginResponse | any): void => {
              console.log('RESPOSTA', response);
              setUser(response);
            }}
            onFailure={console.log}
          />
        </BoxLogin>
        <VideoList></VideoList>
      </Content>
    </AppContainer>
  );
};

export default Login;

// React.useEffect(() => {
//   const f = async (user: GoogleLoginResponse) => {
//     const result = await fetch(url + '/activities', {
//       headers: {
//         Authorization: 'Bearer ' + user.accessToken,
//         key: x_google_cli,
//       },
//     });
//     const r = await result.json();

//     console.log('TESTE?', r);

//     return r;
//   };

//   if (user) {
//     const r = f(user);
//     console.log(r);
//   }

//   // console.log('TENHO', o);
// }, [user]);

// import React, { FormEvent } from 'react';
// import GoogleLogin from 'react-google-login';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

// import { ApplicationState } from '~/store';
// import LoginActions from '~/store/ducks/login/actions';
// import AppContainer from '~/components/AppContainer';

// const Login: React.FC<Props> = (props) => {
//   async function handleInput(e: FormEvent<HTMLFormElement>): Promise<void> {
//     e.preventDefault();

//     console.log('EDITANDO');
//     props.loginRequest();
//   }

//   return (
//     <AppContainer>
//       <div>Login</div>
//       <form onSubmit={handleInput}>
//         <GoogleLogin
//           clientId="273741619457-i5h186mmqc4dqnn4n60ulneavi5rg7vs.apps.googleusercontent.com"
//           onSuccess={() => {}}
//           onFailure={() => {}}
//         />
//       </form>
//     </AppContainer>
//   );
// };

// interface StateProps {}

// interface DispatchProps {
//   loginRequest(): void;
// }

// interface OwnProps {}

// type Props = StateProps & DispatchProps & OwnProps;

// const mapStateToProps = (state: ApplicationState) => ({
//   login: state.login.data,
//   loading: state.login.loading,
// });

// // const mapDispatchToProps = (dispatch: Dispatch) =>
// // bindActionCreators({}, dispatch);
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   loginRequest: () => dispatch(LoginActions.loginRequest(null)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
