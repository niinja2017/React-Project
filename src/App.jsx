import { useEffect, useState } from "react"
import List from "./Components/List"
import InputWithLabel from "./Components/InputWithLabel"
import useStorageState from "./Hooks/useStorageState"

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5)
//   }, 2000)
// })

// myPromise.then(result => {
//   console.log(result)
// },error => {
//   console.log(error)
// })


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

  const getAsyncStory = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: { stories: initialStories }
      })
    }, 2000);
  })

  useEffect(() => {
    getAsyncStory.then(result => {
      setStories(result.data.stories)
    }, error => {
      console.log(error)
    })
  }, [])



  const [searchTerm, setSearchTerm] = useStorageState('search', '')

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filter = stories.filter(story => story.title.includes(searchTerm.toLowerCase()))

  const handlerRemoveStory = (id) => {
    const newStories = stories.filter(story => story.id !== id)
    setStories(newStories)
  }

  return (
    <>
      <div>
        <InputWithLabel onSearch={handlerSearch} searchTerm={searchTerm} id="search" label="inputText" />
        <List list={filter} removeHandle={handlerRemoveStory} />
      </div>
    </>
  )
}

export default App
