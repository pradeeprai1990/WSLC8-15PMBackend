import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import LeftPart from './LeftPart'

export default function Layout() {
  return (
      <div className='grid grid-cols-[20%_auto]  gap-[20px] '>
        <div className=' bg-white h-[100vh]   overflow-y-scroll sticky top-0'>

          <LeftPart />

        </div>
        <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
  )
}
