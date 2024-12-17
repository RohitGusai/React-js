import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'


function App() {
  const [count, setCount] = useState(0)
  // const route = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <Layout/>,
  //     children:[
  //       {
  //         path:'',
  //         element: <Home/>
  //       },
  //       {
  //         path:'about',
  //         element: <About/>
  //       }
  
  //     ]
  //   }
  // ])

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout />} >
        <Route path='' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element = {<Contact />} />
        <Route path='user/:userId' element = {<User/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
