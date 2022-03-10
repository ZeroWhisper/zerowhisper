import { ThemeProvider } from 'styled-components';

const theme = {
  name: 'main',
  colors: {
    primary: '#0070f3',
    secondary: 'red',
  },
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
