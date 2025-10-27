const Search = (props) => {

    const change = (event) => {
        props?.handlerSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">search</label>
            <input onChange={change} type="text" id='search' />
            <p>result : {props?.searchTerm}</p>

            <div style={{width: 300,height:200 , backgroundColor : `${props.searchTerm}`}}></div>
        </div>
    )
}
export default Search
