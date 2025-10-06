import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { loginContext } from './context/MainContext'

export default function Login() {

  let {id,setId}  =useContext(loginContext)

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let [error,setError]=useState('')
  let navigate=useNavigate()
  let checkLogin = (e) => {
    e.preventDefault()
    let formValue = new FormData(e.target)
    axios.post(`${apiBaseUrl}auth/login`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        if(finalRes.status==0){
          setError(finalRes.error)
        }
        else{
          setId(finalRes.admin._id)
        
          
          //  navigate('/home')
        }
      })
  }


  useEffect(()=>{
     if(id){
        navigate('/home')
     }
     
  },[id])
  return (
    <div className='bg-[f9fafb]'>
      <div className='mt-[150px] '>
        <h2 className='flex text-[40px] font-serif font-bold justify-center uppercase'><span className='text-yellow-500'>Mon</span><span className='text-green-500'>ta</span></h2>
      </div>
      <div className='max-w-[500px] mt-[15px] mx-auto   p-[30px] bg-white shadow-lg border border-gray-300 rounded-[8px]'>
        <form onSubmit={checkLogin}>
          <div className='font-bold font-serif '>
            <h2 className='text-[30px]'>Sign in to your account</h2>
          </div>

          { error!='' &&   <span className='text-red-500'> {error} </span> }
         
          <h3 className='my-[10px] font-medium text-[16px] font-serif'>UserName</h3>
          <input name='adminEmail' type='email' className='p-[8px] text-[14px] text-gray-500 border border-gray-300 rounded-[8px] w-full' placeholder='username' />

          <h3 className='my-[10px] font-medium text-[16px] font-serif'>Password</h3>
          <input name='adminPassword' type='text' className='p-[8px] text-[14px] text-gray-500 border border-gray-300 rounded-[8px] w-full' placeholder='username' />
          <button className='mt-[20px] w-full rounded-[8px] bg-sky-500 text-white text-[20px] font-medium font-serif p-[8px] border border-white hover:border hover:border-red-500 hover:bg-black duration-200 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}
