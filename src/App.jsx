import { useEffect, useState } from "react"
import "./App.css"
import Loading from "./Loading"
import Tours from "./Tours"
import Tour from "./Tour"

// const url = "de48b9fa65bb4d4f05b29aee98ea04f6"
const url = "https://course-api.com/react-tours-project"
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setTours(tours)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} />
      </main>
    </>
  )
}

export default App
