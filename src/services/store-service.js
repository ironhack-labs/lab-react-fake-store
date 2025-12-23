
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 1000
});

export async function getStoreProducts() {
    try {
        const response = await instance.get('/products');
        return response.data;
    } catch (error) {
        console.log('An error has obtaining data', error);
    }
}

export async function getStoreProductsByID(id) {
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log('An error has obtaining data', error);
    }
}

export async function getCartByID(id) {
    try {
        const { data } = await instance.get(`/carts/${id}`);
        const { products } = data;

        const productsWithData = await Promise.all(
            products.map(async (prod) => {
                const data = await getStoreProductsByID(prod.productId);
                return {...data, quantity: prod.quantity};
            })
        )
        return productsWithData;
    } catch (error) {
        console.error("Error fetching cart:", error);
    }
}