import { useState } from 'react';
import Button from './components/Button';
import Form from './components/Input';


function App() {

  const [user, setUser] = useState("");
  const [key, setKey] = useState("");

  return (
    <>
      <h1>Bienvenido</h1>
      <Form 
      setUser={setUser}
      setKey={setKey} />
      <div>
      {key === "252525" && <Button/>}
      </div>
    </>
  );
}

export default App;
