import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ChangePassword() {
    let apiBaseurl = process.env.NEXT_PUBLIC_APIBASEURL
    let token = useSelector((store) => store.user.token)


    let ChangePasswword = (e) => {
        e.preventDefault()
        let obj = {
            oldPasswprd: e.target.oldPasswprd.value,
            newPassword: e.target.newPassword.value,
            confirmPassword: e.target.confirmPassword.value
        }
        console.log(obj);
        axios.post(
            `${apiBaseurl}user/change-password`,
            obj,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        )
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);

            })

    }

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">Change Password</h3>
            <div className='border-1 border-[#eee] p-5'>
                <form onSubmit={ChangePasswword}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                        <input type="password" name='oldPasswprd' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="text" id="password" name='newPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="text" id="password" name='confirmPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <button className='bg-amber-500 p-2 rounded text-white'>UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
