import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './sample.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rohit Gusai First</h1>
      <Sample />
    </>
  )
}

export default App