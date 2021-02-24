import React from 'react';
import { io } from 'socket.io-client';

function App(_props: IApp) {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    let socket = io();

    socket.on('now', data => {
      console.log('data', data);
      setMessage(data);
    });
  }, [message]);

  return (
    <React.Fragment>
      <div>Message: </div>
      <pre>{message}</pre>
    </React.Fragment>
  );
}

interface IApp extends React.HTMLAttributes<HTMLDivElement> {}

export default App;
