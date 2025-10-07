import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen'>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
                <div id="login-form">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>
                    <center>
                        <img className='w-[200px] py-2' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
                    </center>

                    <form>
                        <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <input type="password" placeholder="Password" className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        <button type="submit" className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200">Log In</button>

                        <p className="text-center text-gray-600 mt-6">
                            Don’t have an account? <Link href={'/register'} className="text-purple-500 hover:underline">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
