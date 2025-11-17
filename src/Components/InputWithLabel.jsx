const InputWithLabel = ({onSearch , searchTerm , id , label}) => {

    const change = (event) => {
        onSearch(event)
    }
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input onChange={change} value={searchTerm} type="text" id={id} />
        </div>
    )
}
export default InputWithLabel
