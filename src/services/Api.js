
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/products'

// to get all the products
export const getProducts = () => {
    return axios.get(BASE_URL)
}

// to add all the products
export const addProduct = (data) => {
    return axios.post(BASE_URL, data)
}

// to get one product
export const getSingleProduct = (id) => {
    return axios.get(`${BASE_URL}/${id}`)
}

// to update the products
export const updateProduct = (id, data) => {
    return axios.put(`${BASE_URL}/${id}`, data)
}

//  to Delete the  product
export const deleteProduct = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}
