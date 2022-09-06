import { useState } from 'react';
import NotificationButton from './components/NotificationButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Olá mundo</h1>
      <NotificationButton />
    </>
  );
}

export default App;
