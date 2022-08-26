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
<div className='full-image-container'>
  <div className='login-container'>
  <h1 className='login-title'>Bienvenido</h1>
    <form onSubmit={validarDatos}>
      <Form 
      setUser={setUser}
      setKey={setKey} />
      <div>
      {(user === "sharknado" && key === "252525") && <Button/>}
      </div>
      </form>
  </div>
</div>
    </>
  );
}

export default App;
