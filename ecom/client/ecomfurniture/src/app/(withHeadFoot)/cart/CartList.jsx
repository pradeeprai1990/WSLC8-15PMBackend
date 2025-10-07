"use client"
import { cartContext } from '@/app/MainContext';
import React, { useContext, useState } from 'react'
import { MdDelete } from "react-icons/md";

export default function CartList() {
    return (
        <CartLIstView />
    )
}

function CartLIstView() {

    let { cart, setCart } = useContext(cartContext)

    let changeQty = (pid, qty) => {
        let changeMyQty = cart.filter((oldData) => {
            if (oldData.id == pid) {
                oldData['qty'] = qty
            }
            return oldData
        })

        setCart(changeMyQty)
    }

    let deleteFromCart = (pid) => {
        let oldData = cart.filter((item)=>item.id != pid)
        setCart(oldData)
    }

    return (
        <div className='max-w-[1320px] mx-auto py-5'>
            <table className="table-auto border-collapse border border-gray-400 w-full text-left">
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='border border-gray-400 px-4 py-2'>Delete</th>
                        <th className='border border-gray-400 px-4 py-2'>Image</th>
                        <th className='border border-gray-400 px-4 py-2'>Product</th>
                        <th className='border border-gray-400 px-4 py-2'>Price</th>
                        <th className='border border-gray-400 px-4 py-2'>Quantity</th>
                        <th className='border border-gray-400 px-4 py-2'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td className='border border-gray-400 px-4 py-2'><MdDelete className='text-red-700 text-2xl  cursor-pointer' onClick={(e) => deleteFromCart(data.id)} /></td>
                                    <td className='border border-gray-400 px-4 py-2'><img className='w-[25%]' src={data.img} alt="" /></td>
                                    <td className='border border-gray-400 px-4 py-2'>{data.title}</td>
                                    <td className='border border-gray-400 px-4 py-2'>{data.price}</td>
                                    <td className='border border-gray-400 px-4 py-2'>Qty <input onChange={(e) => changeQty(data.id, e.target.value)} className='w-[50px] border-1 border-[#eee] p-2' type="number" value={data.qty} /> </td>
                                    <td className='border border-gray-400 px-4 py-2'>{data.price * data.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}></td>
                        <td><button className='bg-amber-500 p-2 my-5 rounded cursor-pointer text-white'>Update Cart</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
