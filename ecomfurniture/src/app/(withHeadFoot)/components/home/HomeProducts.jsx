"use client"
import { productApi } from '@/api-services/ProductServices'
import ProductCart from '@/app/common/ProductCart'
import React, { useState } from 'react'

export default function HomeProducts({ productData }) {

  let [products, setProducts] = useState(productData)
  let [catName, setCatName] = useState('smartphones')

  let handleChnage = async (category) => {
    let data = await productApi(category)
    setProducts(data)
    setCatName(category)
  }

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-full border-t border-gray-200"></div>
        <div className="relative z-10 bg-white flex">
          <button onClick={() => handleChnage('smartphones')} className={`px-6 py-2 border ${catName=='smartphones'?'border-red-300 text-red-400':'border-gray-200'} font-semibold`}>
            Smartphones
          </button>
          <button onClick={() => handleChnage('beauty')} className={`px-6 py-2 border ${catName=='beauty'?'border-red-300 text-red-400':'border-gray-200'} font-semibold`}>
            Beauty
          </button>
          <button onClick={() => handleChnage('furniture')} className={`px-6 py-2 border ${catName=='furniture'?'border-red-300 text-red-400':'border-gray-200'} font-semibold`}>
            Furniture
          </button>
        </div>
      </div>

      <section className='py-[50px]'>
        <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
          {
            products.map((data, index) => {
              return (
                <ProductCart key={index} data={data} link={`/product/${data.id}`} />
              )
            }
            )
          }
        </div>
      </section>
    </>
  )
}
