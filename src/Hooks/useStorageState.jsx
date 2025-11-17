import { useEffect, useState } from "react"

const useStorageState = (key, initialState) => {

    const [value, setValue] = useState(localStorage.getItem(key) || initialState)

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value])


    return [
        value,
        setValue
    ]
}

export default useStorageState
