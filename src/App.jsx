import { useEffect, useReducer } from "react"
import List from "./Components/List"
import InputWithLabel from "./Components/InputWithLabel"
import useStorageState from "./Hooks/useStorageState"

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'Stories_Fetch_Init':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'Stories_Fetch_Seccess':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'Stories_Fetch_Faile':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case 'removeStories':
      return {
        ...state,
        data: state.filter(story => story.id !== action.payload)
      }

    default: return state
  }
}

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



  // const [stories, setStories] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false
  })


  const getAsyncStory = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 2000);
  })

  useEffect(() => {
    dispatchStories({type: 'Stories_Fetch_Init'})
    getAsyncStory.then(result => {
      dispatchStories({type: 'Stories_Fetch_Seccess', payload : initialStories})
    }).catch((err) => dispatchStories({type: 'Stories_Fetch_Faile'}))
  }, [])


  const handlerRemoveStory = (id) => {
    dispatchStories({
      type: 'removeStories',
      payload: id
    })
  }

  const [searchTerm, setSearchTerm] = useStorageState('search', '')

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filter = stories.data.filter(story => story.title.includes(searchTerm.toLowerCase()))


  return (
    <>
      <div>
        <InputWithLabel onSearch={handlerSearch} searchTerm={searchTerm} id="search" label="inputText" />

        {
          stories.isError && <p>This is Error</p>
        }

        {
          stories.isLoading
            ? <p>Loading .............</p>
            : <List list={filter} removeItem={handlerRemoveStory} />
        }
      </div>
    </>
  )
}

export default App
