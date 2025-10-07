"use client"

import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Register() {

    let apiBaseurl=process.env.NEXT_PUBLIC_APIBASEURL
   
    let [userData,setUserData]=useState({
        userName:'',
        userEmail:'',
        userPhone:'',
        userPassword:'',
        otp:''
    })
    
    let [form, setForm] = useState(true)
    let [otpForm, setOtpForm] = useState(false)

    let saveRegistartion = (e) => {
        e.preventDefault()
        console.log(userData);
        axios.post(`${apiBaseurl}user/send-otp`,userData)
        .then((res)=>res.data)
        .then((finalres)=>{
            console.log(finalres);
            
        })
        
        // setOtpForm(true)
        // setForm(false)
    }


    let getValueorSetValue=(e)=>{
        let obj={...userData}
        obj[e.target.name]=e.target.value
        setUserData(obj)
    }


    return (
        <div>
            <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen'>
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
                    <div id="login-form">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                        <center>
                            <img className='w-[200px] py-2' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
                        </center>
                        {
                            form &&
                            <form onSubmit={saveRegistartion}>
                                <input value={userData.userName} onChange={getValueorSetValue} name='userName' type="text" placeholder="Name" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />


                                <input value={userData.userEmail} onChange={getValueorSetValue} name='userEmail' type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />


                                <input value={userData.userPhone} onChange={getValueorSetValue} name='userPhone' type="number" placeholder="Phone" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />


                                <input value={userData.userPassword}  onChange={getValueorSetValue} name='userPassword' type="password" placeholder="Password" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                                <button type="submit" className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200 cursor-pointer">Sign Up</button>

                                 <div className='my-2 flex gap-1 justify-center'>
                                    <button className='bg-red-600 text-white p-1 rounded cursor-pointer'>
                                        <FaGoogle />
                                    </button>
                                     <button className='bg-blue-600 text-white p-1 rounded cursor-pointer'>
                                        <FaFacebook />
                                    </button>
                                    <button className='bg-black text-white p-1 rounded cursor-pointer'>
                                        <FaGithub />
                                    </button>
                                </div>

                                <p className="text-center text-gray-600 mt-6">
                                    Don’t have an account? <Link href={'/login'} className="text-purple-500 hover:underline">Log In</Link>
                                </p>
                            </form>
                        }

                        {
                            otpForm &&
                            <form>
                                <input name='otp' value={userData.otp} onChange={getValueorSetValue} type="number" placeholder="Enter OTP" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />

                                <button type="submit" className="w-full bg-green-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200">Verify OTP</button>

                                <p className="text-center text-gray-600 mt-6">
                                    Don’t have an account? <Link href={'/login'} className="text-purple-500 hover:underline">Log In</Link>
                                </p>
                            </form>

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
