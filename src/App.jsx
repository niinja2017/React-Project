import { useEffect, useReducer, useState } from "react"
import List from "./Components/List"
import InputWithLabel from "./Components/InputWithLabel"
import useStorageState from "./Hooks/useStorageState"


const App = () => {

  const initialStories = [
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

  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const action = {
    type: 'decrease',
    peyload: 5
  }

  const counterReducer = (state, changeState) => {
    switch (changeState.type) {
      case 'increase':
        return { ...state, state : state + action.peyload}
      case 'decrease':
        return { ...state, state : state - action.peyload}

      default: return state
    }
  }

  const result = (counterReducer(4, action))
  console.log(result)

  const getAsyncStory = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ data: { stories: initialStories } })
      reject()
    }, 2000);
  })

  useEffect(() => {
    setIsLoading(true)
    getAsyncStory.then(result => {
      setStories(result.data.stories)
      setIsLoading(false)
    }).catch((err) => setIsError(true))
  }, [])


  const handlerRemoveStory = (id) => {
    const newStories = stories.filter(story => story.id !== id)
    setStories(newStories)
  }

  const [searchTerm, setSearchTerm] = useStorageState('search', '')

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filter = stories.filter(story => story.title.includes(searchTerm.toLowerCase()))


  return (
    <>
      <div>
        <InputWithLabel onSearch={handlerSearch} searchTerm={searchTerm} id="search" label="inputText" />

        {
          isError && <p>This is Error</p>
        }

        {
          isLoading
            ? <p>Loading .............</p>
            : <List list={filter} removeItem={handlerRemoveStory} />
        }
      </div>
    </>
  )
}

export default App
