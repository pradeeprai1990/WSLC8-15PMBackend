import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function CompanyProfile() {
    let funObj = "Company Profile"

    return (
        <div>
            <BreadCrumb funObj={funObj} />
            <div className='my-[40px] mx-[20px] '>
                <form className='w-[100%]'>
                    <div className='grid grid-cols-[30%_65%] items-center justify-between gap-[30px]'>
                        <div className='mt-[20px]'>
                            <h3 className='font-bold pb-[10px]'>Category Image</h3>
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
                        <div>
                            <h3 className='pt-[10px] font-medium'>Name</h3>
                            <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='Name' />

                            <h3 className='pt-[10px] font-medium'>Email</h3>
                            <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='xyz@gmail.com' />

                            <h3 className='pt-[10px] font-medium'>Mob.</h3>
                            <input type='text' className='mt-[10px] w-[100%] p-[8px] text-[14px] border text-gray-400 rounded-[5px]  border-gray-400' placeholder='+91.............' />
                        </div>

                    </div>

                    <div className='mt-[20px]'>
                        <h3 className='font-medium'>Address</h3>
                        <textarea className=' mt-[5px] w-full p-[20px] text-[14px] text-gray-500 rounded-[8px] border border-gray-500' placeholder='Address'></textarea>
                    </div>

                    <div className='mt-[20px]'>
                        <h3 className='font-medium'>Google Map URL</h3>
                        <textarea className=' mt-[5px] w-full p-[20px] text-[14px] text-gray-500 rounded-[8px] border border-gray-500' placeholder='Google Map URL'></textarea>
                    </div>
                    <div className='mt-[20px]'>
                        <iframe className='w-full border border-gray-300 p-[10px] rounded-[5px]'></iframe>
                    </div>

                    <button className='mt-[30px] p-[10px_16px] bg-blue-500 rounded-[8px] text-white text-[16px font-serif cursor-pointer hover:bg-black border-1 hover:border-red-500'>Submit</button>
                </form>
            </div>

        </div>
    )
}
