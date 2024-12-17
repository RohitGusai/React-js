import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
