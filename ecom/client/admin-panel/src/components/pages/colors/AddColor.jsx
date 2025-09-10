import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'

export default function AddColor() {
  let funObj = "Add Color"
  return (
    <div className='mx-[20px]'>
      <BreadCrumb funObj={funObj} />
      <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[20px] rounded-[8px]'>
          <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
        </div>

        <div className='m-[20px]'>
          <form onSubmit={''}>
            <h3 className='font-medium text-[14px]'>Color Name</h3>
            <input type='text' className='mt-[10px] w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color name' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Name</h3>
            <input type='color' className=' w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color code' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Order</h3>
            <input type='number' className='w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color order' />
            <button className='p-[10px_16px] rounded-[8px] text-center text-[14px] bg-sky-500  font-medium text-white my-[20px] cursor-pointer'>Add Color</button>
          </form>
        </div>

      </div>
    </div>
  )
}
