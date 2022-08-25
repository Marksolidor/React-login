import { useState } from 'react';
import Form from './components/Input';


function App() {

  //const [user, setUser] = useState("");
  const [key, setKey] = useState("");

  return (
    <>
      <h1>Bienvenido</h1>
      <Form setUser={setKey} />
    </>
  );
}

export default App;
