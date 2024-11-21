import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [color, setcolor] = useState('bg-green-500')
let myarr = [1,2,3];
  const toggle =()=>{
    setcolor((pre)=>
       pre === 'bg-green-500' ? 'bg-blue-500' : 'bg-green-500'  
  )
  }
  return (
    <>
      <h1 className={`${color}`} >Rohit Gusai</h1>
      <button type="button" onClick={toggle}>Color change</button>
      <Card username="Rohit" passage="Rohit is a good boy and he is soon going to placed in a company then he will start is carrer on football because he not likes but loves cristano ronaldo" usernumber={myarr}/>
      <Card username="Gusai" passage="jdfsklfjsjfklj" usernumber={myarr}/>
    </>
  )
}

export default App
