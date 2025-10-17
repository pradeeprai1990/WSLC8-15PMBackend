"use client"

import { homeproductApi } from '@/api-services/HomeServices'
import ProductCart from '@/app/common/ProductCart'
import React, { useState } from 'react'

export default function HomeProducts({ productData, categoryData }) {



  let [products, setProducts] = useState(productData.product)
  let [category, setCategory] = useState(categoryData)


  let handleChnage = async (category) => {
    console.log(category); //Cat ID
    
    let data = await homeproductApi(category)
    setProducts(data.product ?? [])
   
  }



  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full border-t border-gray-200"></div>
        <div className="relative z-10 bg-white flex">
          {
            category.map((obj, index) => {
              return (
                <button key={index} onClick={() => handleChnage(obj._id)} className={`px-6 py-2 border border-red-300 text-red-400`}>
                  {obj.categoryName}
                </button>
              )
            })
          }


        </div>
      </div>

      <section className='py-[50px]'>
        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
          {
            products.map((data, index) => {
              return (
                <ProductCart
                  key={index}
                  data={data}
                  imagePath={productData.staticPath}
                  link={`/product/${data.id}`}
                />
              )
            }
            )
          }
        </div>
      </section>
    </>
  )
}
