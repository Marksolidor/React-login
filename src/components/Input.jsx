const Form = (props) => {
    return (
        <>

        <div className="input-group">
        <label>Usuario</label>
         <input type="text" placeholder="Ingrese Usuario" onChange={(e) => props.setUser(e.target.value)} />
        </div>
        <div className="input-group">
        <label>Contraseña</label>
            <input type="password" placeholder="Ingrese Contraseña" onChange={(e) => props.setKey(e.target.value)} />
        </div>


        
        </>
    )
}

export default Form;