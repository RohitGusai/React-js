import React from 'react'
import { memo } from 'react'
function Navbar({username,getadd}) {
    console.log("nav bar")
  return (
    
    <div>
        <h1>{username}</h1>
        <button type="button" onClick={() => {getadd()}}>Change me</button>
    </div>
  )
}

export default memo(Navbar)