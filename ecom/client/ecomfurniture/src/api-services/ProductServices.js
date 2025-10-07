import axios from "axios";

let productApi = (category='smartphones') => {
    return axios.get(`https://dummyjson.com/products/category/${category}`)
        .then((apiRes) => apiRes.data)
        .then((finalData) => finalData.products)
}

let singleProductApi = (pid) => {
    return axios.get(`https://dummyjson.com/products/${pid}`)
        .then((apiRes) => apiRes.data)
        .then((finalData) => finalData)
}

export { productApi, singleProductApi }