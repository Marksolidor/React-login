const Form = (props) => {
    return (
        <input type="text" onChange={(e) => props.setUser(e.target.value)} />
    )
}

export default Form;