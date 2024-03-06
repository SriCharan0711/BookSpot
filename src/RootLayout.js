import React from 'react'
import Navigationbar from './components/navigationbar/Navigationbar'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <Navigationbar/>
        <div className='container'>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default RootLayout