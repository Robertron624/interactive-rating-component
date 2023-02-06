import { useState } from 'react'
import RatingCard from './components/RatingCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RatingCard/>
    </div>
  )
}

export default App
