import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 >
      Hello, Vite + React!
    </h1>
  )
}

console.log(<h1 id="1">
      Hello, Vite + React!
    </h1>);

export default App
