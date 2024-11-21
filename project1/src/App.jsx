import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [count, setCount] = useState(1);
  const [color,setcolor] = useState('black');
  // let count = 1;
  function adding()
  {
    if(count < 20)
    {
      setCount(count+1)
      setCount(count+1)
    }
    
    
  }

  useEffect(()=>
  {
    document.body.style.backgroundColor = color;
  },[color]);

  function substracting()
  {
    if(count > 0)
    {
      setCount(count-1)
    }
    
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>Counter : {count}</h1>
      <button type="button" onClick={adding}>Add Value </button>
      <button type="button" onClick={substracting}>Sub Value</button>
      <button type="button" onClick={()=> setcolor('red')}>Red</button>
      <button type="button" onClick={()=> setcolor('black')}>Reset</button>
      <input
  type="text"
  placeholder="Enter a color"
  onChange={(e) => setcolor(e.target.value)}
/>

    </div>
  )
}



export default App
