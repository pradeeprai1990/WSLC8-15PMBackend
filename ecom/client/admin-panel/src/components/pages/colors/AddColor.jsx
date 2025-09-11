import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
export default function AddColor() {
  let  navigate=useNavigate()
  let [formValue, setformValue] = useState({
    colorName: '',
    colorCode: '',
    colorOrder: ''
  })
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  console.log(apiBaseUrl);

  let colorSave = (e) => {
    e.preventDefault()
    axios.post(`${apiBaseUrl}color/create`, formValue)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status == 1) {
          toast.success(finalRes.msg)
          setformValue({
            colorName: '',
            colorCode: '',
            colorOrder: ''
          })
          setTimeout(()=>{
            navigate("/viewColor")
          },3000)
        }
        else {
          toast.error(finalRes.errorMessage)
        }

      })
    console.log(formValue);

  }


  let getValueorSetvalue = (e) => {
    let obj = { ...formValue }
    let inputName = e.target.name //colorName
    let inputValue = e.target.value
    obj[inputName] = inputValue
    setformValue(obj)
  }

  let funObj = "Add Color"
  return (
    <div className='mx-[20px]'>
      <ToastContainer />
      <BreadCrumb funObj={funObj} />
      <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[20px] rounded-[8px]'>
          <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
        </div>

        <div className='m-[20px]'>
          <form onSubmit={colorSave}>
            <h3 className='font-medium text-[14px]'>Color Name</h3>
            <input value={formValue.colorName}
              onChange={getValueorSetvalue}
              name='colorName' type='text' className='mt-[10px] w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color name' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Name</h3>
            <input type='color'
              onChange={getValueorSetvalue}

              value={formValue.colorCode} name='colorCode' className=' w-full p-[8px] text-[14px] text-gray-400 border border-gray-400  h-[50px] rounded-[5px]' placeholder='color code' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Order</h3>
            <input
              onChange={getValueorSetvalue}

              type='number' value={formValue.colorOrder} name='colorOrder' className='w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color order' />
            <button className='p-[10px_16px] rounded-[8px] text-center text-[14px] bg-sky-500  font-medium text-white my-[20px] cursor-pointer'>Add Color</button>
          </form>
        </div>

      </div>
    </div>
  )
}
