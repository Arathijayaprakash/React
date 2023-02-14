import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../Components/MainNavigation/MainNavigation'

const RootLayout = () => {
  return (
    <div>
      <MainNavigation/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
