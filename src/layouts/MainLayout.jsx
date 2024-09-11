import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    const [childShow,setChildShow]=useState(true)

  return (
    <div>
      <p>header</p>
     { childShow?<Outlet/>:<h1>I can't show my baby</h1>}
      <p>footer</p>
    </div>
  )
}

export default MainLayout
