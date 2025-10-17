"use client"
import React, { useEffect, useState } from 'react'
import ProductCart from '@/app/common/ProductCart'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function HomeBestSellingProducts() {

  let [product, setProduct] = useState([])
  let [imagePath, setImagepath] = useState('')
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  let apiBaseurl = process.env.NEXT_PUBLIC_APIBASEURL
  let getProduct = () => {
    axios.get(`${apiBaseurl}home/best-selling`)
      .then((res) => res.data)
      .then((finalRes) => {
        setProduct(finalRes.product)
        setImagepath(finalRes.staticPath)
      })
  }

    let token = useSelector((store) => store.user.token)

  let addToCart=()=>{
      if(token){
          
      }
      else{
        alert("Please Login")
      }
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div className="slide-container">
      <section className='py-[50px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h3 className='py-1 text-2xl font-bold'>Bestselling Products</h3>
          <hr className='my-4 border-0 h-0.5 bg-[#eee]' />
          <Slide
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            duration={3000}
            arrows={true}
            indicators={false}
          >
            {
            product.map((obj, index) => {
              return (
                <div className='m-4 shadow-lg'>
                    <img className='w-[100%] h-[300px] object-cover' src={imagePath+obj.productImage} alt="" />
                    <h3> {obj.productName} </h3>
                       <h3>Rs {obj.salePrice} </h3>
                       <button onClick={addToCart} className='p-3 bg-red-500'>Add To Cart</button>
                </div>
              )
            })
            }


          </Slide>
        </div>
      </section>
    </div>
  )
}


