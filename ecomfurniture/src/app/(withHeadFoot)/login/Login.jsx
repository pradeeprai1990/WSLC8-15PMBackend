"use client"
import { getUser } from '@/app/redux/slice/userSlice'
import axios from 'axios'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '@/config/fireBaseConfig'
export default function Login() {

    let loginUser = useSelector((store) => store.user.user)

    let dispatch = useDispatch()
    let [userData, setUserData] = useState({
        userEmail: '',
        userPassword: '',

    })

    let apiBaseurl = process.env.NEXT_PUBLIC_APIBASEURL
    let login = (e) => {
        e.preventDefault()

        axios.post(`${apiBaseurl}user/login`, userData)
            .then((res) => res.data)
            .then((finalres) => {
                if (finalres.status) {
                    // console.log(finalres.user);
                    let userObj = {
                        id: finalres.user._id,
                        userName: finalres.user.userName
                    }

                    dispatch(getUser({user:userObj,token:finalres.token}))
                }

            })

        // setOtpForm(true)
        // setForm(false)
    }

    let getValueorSetValue = (e) => {
        let obj = { ...userData }
        obj[e.target.name] = e.target.value
        setUserData(obj)
    }

    useEffect(() => {
        if (loginUser) {
            redirect('/my-dashboard')
        }
    }, [loginUser])


    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    let googleLogin = () => {
        alert("Hello")
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // Google Login User Data Store in MYDB
                 //Data USER INSERT 
                 //Email ID Google LOGIN KYa wo Humere DB 
                 //USER.email == apne DB Check 
                 //USer data

                //  let userObj = {
                //         id: finalres.user._id,
                //         userName: finalres.user.userName
                //     }

                // dispatch(getUser(userObj))

                 //USER.email == apne DB Check  False
                 //New User Create -->
                //  let userObj = {
                //         id: finalres.user._id,
                //         userName: finalres.user.userName
                //     }

                // dispatch(getUser(userObj))


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    return (
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen'>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
                <div id="login-form">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>
                    <center>
                        <img className='w-[200px] py-2' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
                    </center>

                    <form onSubmit={login}>
                        <input type="email" onChange={getValueorSetValue} name='userEmail' placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <input type="password" onChange={getValueorSetValue} name='userPassword' placeholder="Password" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <button type="submit" className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200">Log In</button>

                        <p className="text-center text-gray-600 mt-6">
                            Don’t have an account? <Link href={'/register'} className="text-purple-500 hover:underline">Sign Up</Link>
                        </p>
                    </form>
                    <button onClick={googleLogin} className='bg-blue-400 mt-3 p-3 w-[100%] text-white'>Google Login</button>
                </div>
            </div>
        </div>
    )
}
