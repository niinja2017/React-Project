const Search = ({onSearch , searchTerm}) => {

    const change = (event) => {
        onSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">search</label>
            <input onChange={change} value={searchTerm} type="text" id='search' />
        </div>
    )
}
export default Search
