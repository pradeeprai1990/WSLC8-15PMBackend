import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className='bg-[f9fafb]'>
      <div className='mt-[150px] '>
        <h2 className='flex text-[40px] font-serif font-bold justify-center uppercase'><span className='text-yellow-500'>Mon</span><span className='text-green-500'>ta</span></h2>
      </div>
      <div className='max-w-[500px] mt-[15px] mx-auto   p-[30px] bg-white shadow-lg border border-gray-300 rounded-[8px]'>
        <form onSubmit=''>
          <div className='font-bold font-serif '>
            <h2 className='text-[30px]'>Sign in to your account</h2>
          </div>
           <h3 className='my-[10px] font-medium text-[16px] font-serif'>UserName</h3>
           <input type='text' className='p-[8px] text-[14px] text-gray-500 border border-gray-300 rounded-[8px] w-full' placeholder='username'/>
           
           <h3 className='my-[10px] font-medium text-[16px] font-serif'>Password</h3>
           <input type='text' className='p-[8px] text-[14px] text-gray-500 border border-gray-300 rounded-[8px] w-full' placeholder='username'/>
          <Link to='/home'><button className='mt-[20px] w-full rounded-[8px] bg-sky-500 text-white text-[20px] font-medium font-serif p-[8px] border border-white hover:border hover:border-red-500 hover:bg-black duration-200 cursor-pointer'>Login</button></Link>
        </form>
      </div>
    </div>
  )
}
