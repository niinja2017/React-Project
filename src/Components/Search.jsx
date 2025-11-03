const Search = (props) => {

    const change = (event) => {
        props.onSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">search</label>
            <input onChange={change} value={props.searchTerm} type="text" id='search' />
        </div>
    )
}
export default Search
