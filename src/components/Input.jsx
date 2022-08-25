const Form = (props) => {
    return (
        <>
        <div>
         <input type="text" onChange={(e) => props.setUser(e.target.value)} />
        </div>
        <div>
            <input type="password" onChange={(e) => props.setKey(e.target.value)} />
        </div>
        
        </>
    )
}

export default Form;