import React from 'react'
import { IoHomeSharp, IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function MapLocation() {
    return (
        <>
            <div className='max-w-[1320px] mx-auto py-5 h-[700px]'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d29306.380920588854!2d85.2393984!3d23.341229849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d23.3604178!2d85.2343344!4m3!3m2!1d23.362151299999997!2d85.2242922!5e0!3m2!1sen!2sin!4v1756116974682!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-2 border-gray-300"
                ></iframe>
            </div>
            <div className='max-w-[1320px] mx-auto py-5 grid grid-cols-2 gap-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Contact Us</h1>
                    <hr className='border-1 border-[#eee]' />

                    <h3 className='text-[13px] py-3 flex gap-2'> <IoHomeSharp className='text-[16px]' /> Address : Claritas est etiam processus dynamicus</h3>

                    <hr className='border-1 border-[#eee]' />
                    <h3 className='text-[13px] py-3 flex gap-2'> <IoCallSharp className='text-[16px]' /> : 9234504642</h3>

                    <hr className='border-1 border-[#eee]' />
                    <h3 className='text-[13px] py-3 flex gap-2'> <MdEmail className='text-[16px]' /> : alamsayeed42@gmail.com</h3>
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-3'>Tell us your question</h1>
                    <form>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name *</label>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email *</label>
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipping Mobile Number *</label>
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Number *</label>
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject *</label>
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message *</label>
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div className="mb-5">
                            <button className='bg-amber-500 p-2 rounded text-white'>SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
