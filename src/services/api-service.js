import axios from 'axios';

const https = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

https.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

const listProducts = (()=> https.get('/products'))

const getProduct = (id)=> https.get(`/products/${id}`)

export {
    listProducts,
    getProduct
}


