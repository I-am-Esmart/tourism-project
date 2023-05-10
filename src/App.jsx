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

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setTours(data)
      // console.log(data)
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

  if (tours.length === 0) {
    return (
      <main>
        <h2>You have removed all tours</h2>
        <button
          className="refresh-btn"
          style={{ marginTop: "2rem" }}
          onClick={fetchTours}
        >
          Refetch Tours
        </button>
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
