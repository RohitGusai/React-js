import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp()
{
  return(
    <h1>Rohit</h1>
  )
}

function Myshop()
{
  return(
  <a href="http://google.com" target="_blank">click me</a>
  )
}

const Myfun = React.createElement(
  'a',
  {href : 'https://google.com',target:'_blank'},
  'click you'
  
)

createRoot(document.getElementById('root')).render(

  //  <Myshop />
  //  <MyApp />
  Myfun
    

)
