import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charaterAllowed,setcharaterAllowed] = useState(false);
  const [password,setpassword] = useState("");
  const passwordref = useRef(null);

  const copytoclipboard = useCallback(
    () => {
      passwordref.current?.select()
      passwordref.current?.setSelectionRange(0,length)
      window.navigator.clipboard.writeText(password);
      // alert("copy to Clipboard")
    },
    [password],
  )
  

  const passwordgenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     
      if(numberAllowed) str+= "1234567890"  
      if(charaterAllowed) str+= "!@#$%^&*()_[]{}+=-/"     
      for(let i=1; i<=length; i++)
      {
          let char = Math.floor(Math.random()*str.length + 1)
          pass += str.charAt(char);
      }
      setpassword(pass);
    },
    [length,numberAllowed,charaterAllowed,setpassword],
  )
  
  useEffect(() => {
    passwordgenerator()
  }, [length,numberAllowed,charaterAllowed],)
  

  


  return (
    <div>

      <input 
      type="text" 
      value={password} 
      ref={passwordref} 
      placeholder='Password' 
      className='outline-none px-5 py-5 w-full' 
      readOnly/>
      <button type="button" onClick={copytoclipboard}  className='px-4 py-3 bg-white text-black'>Copy</button>
      
      

    <div className='flex gap-5'>
      <div className=''>
        <input 
        type="range" 
        min={6} 
        max={100} 
        value={length} 
        className='cursor-pointer ' 
        onChange={(e) => {setlength(e.target.value) }} />
        <label>Length:{length}</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={numberAllowed} 
        onChange={() => {setnumberAllowed((prev) => !prev)}}/>
        <label>Number</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={charaterAllowed} 
        onChange={() => {setcharaterAllowed((prev) => !prev)}}/>
        <label>Charater</label>
      </div>
    </div>
  </div>
  )
}

export default App
