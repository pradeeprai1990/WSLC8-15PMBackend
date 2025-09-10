import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function AdminProfile() {
    let funObj = "Admin Profile"
    let [changeTab, setChangeTab] = useState(1);
    return (
        <div className='mx-[20px]'>
            <BreadCrumb funObj={funObj} />
            <div className='my-[40px]  '>
                <div className='grid grid-cols-[30%_auto] gap-[20px]  items-center'>
                    <div className='bg-white shadow-lg rounded-[8px] w-full'>

                        <div className='bg-white p-[20px]'>
                            <div className=''>
                                <div className='flex justify-center '>
                                    <img src='#' className='bg-purple-500 p-[10px] rounded-[50%]'/>
                                </div>
                                <h3 className='mt-[10px] text-[16px] text-center font-medium '>Admin</h3>
                            </div>
                        </div>
                        <div className='bg-gray-200 p-[20px] rounded-[8px]  '>
                            <h3 className='text-[16px] font-bold'>Contact Information</h3>
                            <h4 className='text-[14px] mt-[5px] items-center flex gap-[8px] font-medium'><FaPhoneAlt className='text-[16px]'/>1234567890</h4>
                            <h4 className='text-[14px] mt-[5px] flex items-center gap-[8px] font-medium'><MdOutlineEmail className='text-[16px]'/>xyz@gmail.com</h4>
                        </div>

                    </div>
                    <div className='w-full p-[30px] rounded-[8px] shadow-lg bg-white '>
                        <div className='flex gap-[20px] font-bold border-b-2 border-gray-400'>
                            <h2 className={`hover:text-purple-500 cursor-pointer  ${changeTab == Number(1) ? 'text-purple-500' : ' '}`} onClick={() => setChangeTab(1)}>Edit profle</h2>
                            <h2 className={`hover:text-purple-500 pb-[15px] cursor-pointer ${changeTab == Number(2) ? 'text-purple-500' : ' '}`} onClick={() => setChangeTab(2)}>Change password</h2>
                        </div>
                        <form className='w-[100%]'>
                            {
                                changeTab == Number(1) &&

                                <div className='grid grid-cols-[30%_auto]  gap-[30px]'>
                                    <div className='mt-[20px]'>
                                        <div className="flex items-center justify-center w-full">
                                            <label for="dropzone-file" className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>

                                    </div>
                                    <div className='w-full'>
                                        <h3 className='pt-[10px] font-medium'>Name</h3>
                                        <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='Name' />

                                        <h3 className='pt-[10px] font-medium'>Email</h3>
                                        <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='xyz@gmail.com' />

                                        <h3 className='pt-[10px] font-medium'>Mob.</h3>
                                        <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='+91.............' />
                                    </div>

                                </div>
                            }

                            {
                                changeTab == Number(2) &&

                                <div className='w-full'>
                                    <h3 className='pt-[10px] font-medium'>Name</h3>
                                    <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='Name' />

                                    <h3 className='pt-[10px] font-medium'>Email</h3>
                                    <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='xyz@gmail.com' />

                                    <h3 className='pt-[10px] font-medium'>Mob.</h3>
                                    <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='+91.............' />
                                </div>

                            }

                            <button className='mt-[30px] p-[10px_16px] bg-blue-500 rounded-[8px] text-white text-[16px font-serif cursor-pointer hover:bg-black border-1 hover:border-red-500'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}