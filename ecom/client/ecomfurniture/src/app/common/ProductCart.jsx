"use client"
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { cartContext } from '../MainContext';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, deleteCart } from '../redux/slice/cartSlice';

export default function ProductCart({ data, link }) {

    // let {cart, setCart} = useContext(cartContext)
    
    let cart = useSelector((myStore)=>myStore.myCart.cart)
    let chkItemInCart=cart.find((item)=>item.id == data.id)
   
    //.find((item)=>item.id == data.id)
    let dispatch=useDispatch()
    let addToCart = () => {
        let cartObj = {
            id:data.id,
            category:data.category,
            title:data.title,
            img:data.thumbnail,
            qty:1,
            price:data.price
        }

        dispatch(addCart( cartObj ))
        // console.log(cartObj);
        
        // setCart([cartObj,...cart])

    }

    let  deleteData=()=>{
         dispatch(deleteCart( {id:data.id} ))
    }

    return (
        <div className='shadow-lg'>
            <Link href={link}>
                <img src={data.thumbnail} alt="" />
                <h4 className='py-3 text-center'>{data.title}</h4>
                <h3 className='font-bold text-center py-2'>{data.category
                }</h3>
                <hr className='my-4 border-0 h-0.5 bg-[#eee]' />
                <div className='py-3 text-center'>
                    <span className='line-through'>Rs. {data.price}</span><span> Rs. {data.price}</span>
                </div>
            </Link>
            <div className='py-3 flex justify-center gap-1'>
                <button className='bg-[#eee] px-2 p-1 cursor-pointer'><FaHeart /></button>
                {
                    chkItemInCart?
                    <button className='bg-[#e10c0c] px-2 p-1 cursor-pointer text-white' onClick={deleteData}>Remove From Card</button>
                    :
                    <button onClick={() => addToCart()} className='bg-[#eee] px-2 p-1 cursor-pointer'>Add To Card</button>
                }
                
            </div>
        </div>
    )
}
