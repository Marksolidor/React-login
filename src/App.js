import { useState } from 'react';
import Form from './components/Input';


function App() {

  const [user, setUser] = useState("");

  return (
    <>
      <h1>Bienvenido</h1>
      <Form setUser={setUser} />
    </>
  );
}

export default App;
