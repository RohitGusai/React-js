import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'



function App() {
  const [color, setColor] = useState("olive")

  // const toggle =() =>
  // {
  //   setColor((prev) =>
  //       prev !== 'black' ? 'black' : 'white'
      
  //   )
  // }

  const textcolor = color === 'black' ? 'text-white' : 'text-black'
  

  return (
   
      <div className={`w-full h-screen ${textcolor}`} style={{backgroundColor:color}}>
        <h1 >dlsjflk</h1>
        <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12'>
          
        <div className='flex flex-wrap px-3 py-4 rounded-3xl gap-3 bg-white'>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'red'}}  onClick={()=> setColor('red')}>Red</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'green'}}onClick={()=> setColor('green')}>Green</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'blue'}}onClick={()=> setColor('blue')}>Blue</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'olive'}}onClick={()=> setColor('olive')}>Olive</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black ' style={{backgroundColor:'gray'}}onClick={()=> setColor('gray')}>Gray</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black ' style={{backgroundColor:'yellow'}}onClick={()=> setColor('yellow')}>Yellow</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black ' style={{backgroundColor:'pink'}}onClick={()=> setColor('pink')}>Pink</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black ' style={{backgroundColor:'purple'}}onClick={()=> setColor('purple')}>Purple</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'lavender'}}onClick={()=> setColor('lavender')}>Lavender</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-black' style={{backgroundColor:'white'}}onClick={()=> setColor('white')}>white</button>
        <button type="button" className='outline-none rounded-full px-4 py-1 text-white' style={{backgroundColor:'black'}}onClick={()=> setColor('black')}>black</button>
        </div>
      </div>
    </div>
   
  )
}

export default App
