import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { FaSearchengin } from "react-icons/fa6";
import { BiSolidVolume } from "react-icons/bi";
import { ImVolumeMute2 } from "react-icons/im";
import { LuPencilLine } from "react-icons/lu";
import axios from 'axios';
import { Link } from 'react-router';

export default function ViewSubCategory() {
  let funObj = "View Sub Category"
  let [search, setSearch] = useState(false)
  let [currentPage, setCurrentPage] = useState(1)
  let [limit, setLimit] = useState(5)

  let [subcategoryData, setsubCategoryData] = useState([])
  let [staticPath, setStaticPath] = useState([])

  let [totalPages, settotalPages] = useState(0) //3
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let getsubCategory = () => {
    axios.get(`${apiBaseUrl}subcategory/view`, {
      params: {
        page: currentPage,
        limit
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes.subcategoryData);

        setsubCategoryData(finalRes.subcategoryData);
        setStaticPath(finalRes.staticPath)
        settotalPages(finalRes.totPages) //3
      })
  }

  useEffect(() => {
    getsubCategory()
  }, [])
  return (
    <div className='mx-[20px]'>
      <div className={`my-[20px] border border-gray-300 rounded-[5px] p-[20px] flex items-center gap-[15px] ${search ? ' ' : 'hidden'} `}>
        <input type=' text' className='p-[8px] text-[14px] text-gray-[300px] rounded-[5px] border border-gray-300 w-[250px]' placeholder='search here' />
        <div className='bg-blue-400 rounded-[5px] p-[8px] cursor-pointer hover:bg-black border hover:border-red-500 duration-300'><FaSearchengin className='text-white ' /></div>
      </div>
      <div className='border border-gray-500 rounded-[5px] '>
        <div className='p-[20px] flex justify-between items-center bg-gray-300 rounded-[5px]'>
          <h2 className='text-[35px] font-bold font-serif'>{funObj}</h2>
          <div className='flex justify-between items-center gap-[20px]'>
            <div className='p-[10px_10px] bg-sky-400 rounded-[5px] hover:bg-black border hover:border-red-500 cursor-pointer'>
              {
                search ?

                  <ImVolumeMute2 className='text-white ' onClick={() => setSearch(false)} />
                  : <BiSolidVolume className='text-white ' onClick={() => setSearch(true)} />

              }
            </div>

            <button className='p-[10px_16px] bg-green-500 text-white rounded-[8px] duration-200 hover:bg-black border hover:border-red-500 cursor-pointer'>Delete</button>
            <button className='p-[10px_16px] bg-blue-500 text-white rounded-[8px] duration-200 hover:bg-black border hover:border-red-500 cursor-pointer '>Update</button>

          </div>
        </div>


        {/*table draw */}

        <div class="relative overflow-x-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr className='uppercase text-[15px]'>

                <th scope="col" class="px-6 py-3 rounded-s-lg flex gap-[10px] items-center ">
                  <input type='checkbox' />
                  <h3>Sub Catname</h3>
                </th>
                <th scope='col' className='px-6 py-3 text-center'>
                  Parent Category Name
                </th>

                <th scope="col" class="px-6 py-3 text-center">
                  image
                </th>
                <th scope="col" class="px-6 py-3 text-center ">
                  order
                </th>

                <th scope="col" class="px-6 py-3  text-center">
                  status
                </th>
                <th scope="col" class="px-6 py-3  text-center">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                subcategoryData.map((obj, index) => {
                  return (
                    <tr class="bg-white dark:bg-gray-800">

                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[10px] items-center">
                        <input type='checkbox' />
                        <h3 className='text-[14px]'>
                          {obj.subcategoryName}
                        </h3>
                      </th>

                      <td class="px-6 py-4  text-center">
                         {obj.parentCategory.categoryName}
                      </td>
                      <td class="px-6 py-4  text-center">
                       <img src={staticPath+obj.subcategoryImage} width={50} />
                      </td>

                      <td class="px-6 py-4 text-center">
                         {obj.subcategoryOrder}
                      </td>

                      <td class="px-6 py-4 text-center">
                        <button className='p-[10px_16px] bg-blue-500 text-white text-[15px] rounded-[8px] cursor-pointer font-serif'>Active</button>
                      </td>
                      <td class="px-6 py-4 flex justify-center">
                        <Link to={`/edit-subcategory/${obj._id}`}>
                        <LuPencilLine className='p-[5px] rounded-[50%] bg-blue-500 text-white text-[35px] cursor-pointer  ' />
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>

        {/* table end*/}
      </div>
    </div>
  )
}
