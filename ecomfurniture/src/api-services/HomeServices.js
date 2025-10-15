import axios from "axios"
 let apiBaseurl = process.env.NEXT_PUBLIC_APIBASEURL
let  categoryApi  = () => {
    return axios.get(`${apiBaseurl}home/category`)
        .then((apiRes) => apiRes.data)
        .then((finalData) => finalData.category)
}

let homeproductApi = (catId) => {
   
    
    return axios.get(`${apiBaseurl}home/product/${catId}`)
        .then((apiRes) => apiRes.data)
        .then((finalData) => finalData)
}



let bannerApi= () => {
    return axios.get(`https://dummyjson.com/products`)
        .then((apiRes) => apiRes.data)
        .then((finalData) => finalData.products.slice(0, 5))
}


let homeCollectionApi = () => {
    let finalData = [
        {
            title: 'Design Creative',
            thumbnail: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp'
        },
        {
            title: 'Bestselling Products',
            thumbnail: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp'
        },
        {
            title: 'Onsale Products',
            thumbnail: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp'
        }
    ]

    return finalData
}

export {homeproductApi, bannerApi, homeCollectionApi,categoryApi }