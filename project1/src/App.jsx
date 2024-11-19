import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [count, setCount] = useState(1);
  // let count = 1;
  function adding()
  {
    if(count < 20)
    {
      setCount(count+1)
    }
    
    
  }
  function substracting()
  {
    if(count > 0)
    {
      setCount(count-1)
    }
    
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      <button type="button" onClick={adding}>Add Value </button>
      <button type="button" onClick={substracting}>Sub Value</button>
    </>
  )
}



export default App
