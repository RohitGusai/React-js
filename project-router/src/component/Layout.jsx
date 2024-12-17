import { Link } from "react-router-dom";

import React from 'react'

function Layout() {
  return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}

export default Layout