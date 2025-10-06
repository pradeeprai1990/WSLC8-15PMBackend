import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import LeftPart from './LeftPart'
import { loginContext } from '../../context/MainContext'

export default function Layout() {

  let { id, setId } = useContext(loginContext)
  let navigate = useNavigate()
  useEffect(() => {
    if (id == '' || id == null || id == undefined) {
      navigate('/')
    }
    else{
      console.log(id);
      //Api Id backend ke pass
      
      
    }
  }, [id])
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
