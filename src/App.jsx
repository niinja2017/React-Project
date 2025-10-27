import { useState } from "react"
import List from "./Components/List"
import Search from "./Components/Search"

const App = () => {

  const stories = [
    {
      id: 1,
      title: 'react',
      url: 'www.react.com',
      point: 4
    },
    {
      id: 2,
      title: 'redux',
      url: 'www.redux.com',
      point: 8,
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }


  return (
    <>
      <div className='w-full h-screen flex flex-col space-y-3 items-center justify-center'>
        <List list={stories} />
        <Search handlerSearch={handlerSearch} searchTerm={searchTerm}/>
      </div>
    </>
  )
}

export default App
