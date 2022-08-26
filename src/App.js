import { useState } from 'react';
import Button from './components/Button';
import Form from './components/Input';


function App() {
//user states
  const [user, setUser] = useState("");
  const [key, setKey] = useState("");
//function before send the form
const validarDatos = (e) => {
  e.preventDefault();
  return;
   
  };
  return (
    <>
    <form onSubmit={validarDatos}>
      <h1>Bienvenido</h1>
      <Form 
      setUser={setUser}
      setKey={setKey} />
      <div>
      {(user === "sharknado" && key === "252525") && <Button/>}
      </div>
      </form>
    </>
  );
}

export default App;
