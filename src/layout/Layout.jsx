import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'

const Layout = () => {
  return (
    <div>
        <MyNavbar/>
        <Outlet/>
    </div>
  )
}

export default Layout