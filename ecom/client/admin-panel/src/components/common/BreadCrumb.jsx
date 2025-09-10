import React from 'react'
import { Link } from 'react-router'

export default function BreadCrumb({funObj}) {

  return (
    <div className='border-b-1 border-gray-300'>
        <h2 className='p-[15px]  font-medium text-[16px]'><Link to='/home'><span className='cursor-pointer hover:text-purple-500'>Home</span></Link> <span className='text-blue-500'>{"/"} {funObj}</span></h2>
    </div>
  )
}
