import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <p>banner</p>
      <p>nav</p>
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <p>footer</p>
      <p>product sidebar</p>
    </>
  )
}

export default AppLayout