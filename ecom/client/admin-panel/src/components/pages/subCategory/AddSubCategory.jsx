import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { IoCloudUploadOutline } from 'react-icons/io5'
import axios from 'axios'

export default function AddSubCategory() {
  let [image, setImage] = useState(`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019`)


   let [parentData,setparentData]=useState([])
   let apiBaseUrl = import.meta.env.VITE_APIBASEURL


  let getparentCategory=()=>{
    axios.get(`${apiBaseUrl}subcategory/parent-category`)
    .then((res)=>res.data)
    .then((finalres)=>{
      setparentData(finalres.categoryData);
      
    })
  }

  let savesubCategory=(e)=>{
     e.preventDefault()
     let formValue=new FormData(e.target)
     axios.post(`${apiBaseUrl}subcategory/create`, formValue)
        .then((res) => res.data)
        .then((finalRes) => {
         

        })
  }

  useEffect(()=>{
    getparentCategory()
  },[])
  let funObj = "Add Sub Category"
  return (
    <div className='mx-[20px]'>
      <BreadCrumb funObj={funObj} />
      <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[20px] rounded-[8px]'>
          <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
        </div>

        {/* input box */}

        <div className='m-[20px]'>

          <form onSubmit={savesubCategory}>
            <div className='grid grid-cols-[30%_auto] gap-4'>
              <div>
               <div className="flex items-center justify-center w-full">
                  <label for="dropzone-file" className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex relative flex-col items-center justify-center pt-5 pb-6">
                      <img src={image} width={200} alt="" />
                      <button onClick={() => setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019')} type='button' className='absolute right-0 top-0 bg-red-200'>Remove</button>
                    </div>
                    <input onChange={(e) => {
                      setImage(URL.createObjectURL(e.target.files[0]))
                      //object

                    }} id="dropzone-file"  name='subcategoryImage'  type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className='w-full'>
                <h3 className='my-[10px] font-medium text-[14px]'>Parent Category </h3>
                <select name='parentCategory' className=' w-full p-[10px] rounded-[10px] border border-gray-400 text-[14px] text-gray-400'>
                  <option >Select</option>
                  {
                    parentData.map((obj,index)=>{
                      return(
                        <option value={obj._id}> {obj.categoryName} </option>
                      )
                    })
                  }
                </select>
                <h3 className='my-[10px] font-medium text-[14px]'>Sub Category Name</h3>
                <input type='text' name='subcategoryName' placeholder='Sub Category Name' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />
                <h3 className='my-[10px] font-medium text-[14px]'>Order</h3>
                <input type='text' name='subcategoryOrder' placeholder='Category Order' className=' w-full p-[8px] rounded-[8px] border border-gray-400 text-[14px] text-gray-400' />

              </div>
            </div>
            <button className='my-[20px] p-[10px_16px] rounded-[8px] text-white text-[16px] font-serif bg-sky-500 cursor-pointer duration-200 hover:bg-black hover:border hover:border-red-500'>Add sub Category</button>
          </form>

        </div>

        {/* input box end */}
      </div>
    </div>
  )
}
