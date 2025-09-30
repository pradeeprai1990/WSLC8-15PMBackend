import React, { useEffect, useState } from "react";
import BreadCrumb from "../../common/BreadCrumb";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function AddProducts() {
    let [parentData, setparentData] = useState([])
    let [subcatData, setSubcatData] = useState([])
    let [subSubcatData, setsubSubcatData] = useState([])
    let [color, setColor] = useState([])
    let [material, setMaterial] = useState([])
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL
    const [productDes, setProductDes] = useState('');

    let saveProduct = (e) => {
        e.preventDefault()
        let formValue = new FormData(e.target)
        axios.post(`${apiBaseUrl}product/create`, formValue)
            .then((res) => res.data)
            .then((finalRes) => {


            })
    }



    let getparentCategory = () => {
        axios.get(`${apiBaseUrl}product/parent-category`)
            .then((res) => res.data)
            .then((finalres) => {
                setparentData(finalres.categoryData);

            })
    }

    let getColors = () => {
        axios.get(`${apiBaseUrl}product/colors`)
            .then((res) => res.data)
            .then((finalres) => {
                setColor(finalres.colorData);

            })
    }


    let getMaterial = () => {
        axios.get(`${apiBaseUrl}product/material`)
            .then((res) => res.data)
            .then((finalres) => {
                setMaterial(finalres.materialData);

            })
    }




    let getsubCategoryData = (pid) => {
        axios.get(`${apiBaseUrl}subsubcategory/sub-category/${pid}`)
            .then((res) => res.data)
            .then((finalres) => {
                setSubcatData(finalres.subcategoryData);
            })
    }


    let getsubsubCategoryData = (pid) => {
        axios.get(`${apiBaseUrl}product/sub-sub-category/${pid}`)
            .then((res) => res.data)
            .then((finalres) => {
                setsubSubcatData(finalres.subsubCategoryData);

            })
    }


    useEffect(() => {
        getparentCategory()
        getColors()
        getMaterial()
    }, [])


    let funObj = "Add Products";
    return (
        <div className="mx-[20px]">
            <BreadCrumb funObj={funObj} />
            <div className="mt-[20px]  border border-gray-400 rounded-[8px] ">
                <div className="bg-gray-300 p-[20px] rounded-[8px]">
                    <h2 className="font-bold text-[30px] font-serif">{funObj}</h2>
                </div>

                <div className="m-[20px]">
                    <form onSubmit={saveProduct}>
                        <div className="grid grid-cols-[30%_auto] gap-[20px]">
                            {/* first column start */}
                            <div>
                                <h3 className="my-[10px] font-medium text-[16px]">
                                    Product Image
                                </h3>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        for="dropzone-file"
                                        className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >

                                        <input id="dropzone-file" name="productImage" type="file" className="" />
                                    </label>
                                </div>
                                <h3 className="my-[10px] font-medium text-[16px]">
                                    Back Image
                                </h3>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        for="dropzone-file"
                                        className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />


                                        </div>
                                        <input name="backImage" id="dropzone-file" type="file" className="" />
                                    </label>
                                </div>
                                <h3 className="my-[10px] font-medium text-[16px]">
                                    Gallery Image
                                </h3>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        for="dropzone-file"
                                        className="p-[20px] flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />


                                        </div>
                                        <input name="productGallery" id="dropzone-file" multiple type="file" />
                                    </label>
                                </div>
                            </div>
                            {/* first colum end */}

                            {/* second colum start */}
                            <div className=" gap-[20px] mt-[20px]">
                                {/* first text */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="Prodct_Name"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Prodct Name
                                        </label>
                                        <input
                                            type="text"
                                            class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                            placeholder="Prodct Name"
                                            name="productName"
                                            fdprocessedid="s3ookt"
                                        />
                                    </div>
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Parent Category
                                        </label>

                                        <select onChange={(e) => getsubCategoryData(e.target.value)} name='parentCategory' className=' w-full p-[10px] rounded-[10px] border border-gray-400 text-[14px] '>
                                            <option >Select</option>
                                            {
                                                parentData.map((obj, index) => {
                                                    return (
                                                        <option value={obj._id}> {obj.categoryName} </option>
                                                    )
                                                })
                                            }
                                        </select>


                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Sub Category
                                        </label>
                                        <select onChange={(e) => {
                                            getsubsubCategoryData(e.target.value)
                                        }} name='subCategory' className=' w-full p-[10px] rounded-[10px] border border-gray-400 text-[14px]'>
                                            <option >Select</option>
                                            {
                                                subcatData.map((obj, index) => {
                                                    return (
                                                        <option value={obj._id}> {obj.subcategoryName} </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Sub Sub Category
                                        </label>
                                        <select name='subsubCategory' className=' w-full p-[10px] rounded-[10px] border border-gray-400 text-[14px]'>
                                            <option >Select</option>
                                            {
                                                subSubcatData.map((obj, index) => {
                                                    return (
                                                        <option value={obj._id}> {obj.subSubcategoryName} </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Meterial
                                        </label>
                                        <select multiple
                                            name="productMeterial[]"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="gdnxr"
                                        >
                                            {
                                                material.map((obj, index) => {
                                                    return (
                                                        <option value={obj._id}> {obj.materialName} </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Color
                                        </label>
                                        <select
                                            multiple
                                            name="productColor[]"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="kt2iko"
                                        >
                                            {
                                                color.map((obj, index) => {
                                                    return (
                                                        <option value={obj._id}> {obj.colorName} </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Select Prodcut Type
                                        </label>
                                        <select
                                            name="productType"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="1j60v"
                                        >
                                            <option value="">Nothing Selected</option>
                                            <option value="Featured">Featured</option>
                                            <option value="New Arrivals">New Arrivals</option>
                                            <option value="Onsale">Onsale</option>
                                        </select>
                                    </div>

                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Is Best Selling
                                        </label>
                                        <select
                                            name="bestSelling"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="mcz3xl"
                                        >
                                            <option value="">Nothing Selected</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Is Top Rated
                                        </label>
                                        <select
                                            name="topRated"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="xqex0v"
                                        >
                                            <option value="">Nothing Selected</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div class="mb-5" bis_skin_checked="1">
                                        <label
                                            for="categoryName"
                                            class="block  text-md font-medium text-gray-900 text-[#76838f]"
                                        >
                                            Is Upsell
                                        </label>
                                        <select
                                            name="upSell"
                                            class="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3"
                                            fdprocessedid="8bccdn"
                                        >
                                            <option value="">Nothing Selected</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-5">

                                    <div class="mb-5" bis_skin_checked="1"><label for="categoryName" class="block  text-md font-medium text-gray-900 text-[#76838f]">Actual Price</label>
                                        <input type="text"
                                            name="actualPrice"
                                            class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Actual Price" fdprocessedid="x2qb02" /></div>

                                    <div class="mb-5" bis_skin_checked="1"><label for="categoryName" class="block  text-md font-medium text-gray-900 text-[#76838f]">Sale Price</label><input

                                        name="salePrice"
                                        type="text" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder=" Sale Price" fdprocessedid="fp61g" /></div>
                                </div>


                                <div className="grid grid-cols-2 gap-5">



                                    <div class="mb-5" bis_skin_checked="1"><label for="categoryName" class="block  text-md font-medium text-gray-900 text-[#76838f]">Total In Stocks</label><input
                                        name="inStocks"
                                        type="text" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Total In Stocks" fdprocessedid="qehypa" /></div>

                                    <div class="mb-5" bis_skin_checked="1"><label for="categoryName" class="block  text-md font-medium text-gray-900 text-[#76838f]">Order</label><input
                                        name="productOrder"

                                        type="text" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Order" fdprocessedid="jqcp5w" /></div>
                                </div>
                                <div className="grid grid-cols-1 gap-5">
                                    <div class="mb-5" bis_skin_checked="1">

                                        <label for="categoryName" class="block  text-md font-medium text-gray-900 text-[#76838f]">Total In Stocks</label>

                                        <textarea name="productDesc" className="border-2 w-[100%] h-[200px] " ></textarea>


                                    </div>
                                </div>
                                <button>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
