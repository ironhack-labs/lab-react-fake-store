import axios from "axios";
const http = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export async function getAllProducts() {
    const { data } = await http.get("/products");
    return data;   
}

export async function getProductById(id) {
    const { data } = await http.get(`/products/${id}`);
    return data;
}
