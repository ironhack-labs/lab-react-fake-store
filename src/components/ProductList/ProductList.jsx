import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const API_URL = "https://fakestoreapi.com"

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        axios
            .get(`${API_URL}/products`)
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }


    return (
        <div className="ProductList">
            {
                products.map(elm => {
                    return (
                        <ProductCard key={elm.id} {...elm} />
                    )
                })
            }
        </div>
    )
}

export default ProductList