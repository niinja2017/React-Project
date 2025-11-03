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
    },
    {
      id: 3,
      title: 'tailwind',
      url: 'www.tailwindcss.com',
      point: 8,
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filter = stories.filter(story => story.title.includes(searchTerm.toLowerCase()))


  return (
    <>
      <div>
        <Search onSearch={handlerSearch} />
        <List list={filter} />
      </div>
    </>
  )
}

export default App
