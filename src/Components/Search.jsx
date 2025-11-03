const Search = (props) => {

    const change = (event) => {
        props.onSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">search</label>
            <input onChange={change} type="text" id='search' />
        </div>
    )
}
export default Search
