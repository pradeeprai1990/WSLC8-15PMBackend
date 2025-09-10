import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router';

export default function Header() {
  let [profile,setProfile]=useState(false)
  return (
    <header className='sticky top-0 bg-white border-b-1  border-gray-300 mx-[20px]'>
      <nav className='p-[20px] flex items-center justify-between'>
        <div>
            <h1 className=' text-[35px] font-serif flex gap-[5px] items-center'><MdDashboard className='text-blue-500'/>Admin Dashboard</h1>
        </div>
        <div onMouseEnter={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>
           <FaRegUserCircle className='text-[40px] hover:text-blue-500 duration-300  cursor-pointer'/>
           <div className={`fixed right-[2%] duration-200 ${profile?'top-[9%]':'top-[-1000px]'}  z-[99999] w-[200px] p-[20px] bg-white border border-gray-300 rounded-[5px]`}>
             <Link to='/adminprofile'><h3 className='border-b-1 border-gray-200 pb-[10px] hover:text-blue-400 cursor-pointer'>Profile</h3></Link>
             
             <Link to='/companyprofile'><h3 className='mt-[10px] border-b-1 border-gray-200 pb-[10px] hover:text-blue-400 cursor-pointer '>Company Profile</h3></Link>
             
             <h3 className='mt-[10px] hover:text-blue-400 cursor-pointer'>Logout</h3>
           </div>
        </div>
      </nav>
    </header>
  )
}
