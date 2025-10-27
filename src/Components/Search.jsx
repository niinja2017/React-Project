const Search = () => {

    const changeHandler = (event) => {
        console.log(event.target.value)
    }
    // evnet.target.value : برای برگرداندن مقدار درون ریترن

    return (
        <div>
            <label htmlFor="search" className='border rounded bg-blue-500 text-white p-2 cursor-pointer user-select-none'>search</label>
            <input onChange={changeHandler} type="text" id='search' className='border rounded ml-2 p-2' />
        </div>
    )
}

export default Search
