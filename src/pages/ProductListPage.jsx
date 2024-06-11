import { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductItem from "../components/ProductItem";

function ProductListPage() {
    // The state variable `products` is currently an empty array [],
    // but you should use it to store the response from the Fake Store API (the list of products).
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const result = await fetch("https://fakestoreapi.com/products");
            const data = await result.json();
            setProducts(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // To fetch the list of products, set up an effect with the `useEffect` hook:
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="ProductListPage">
            <ul>
                {products &&
                    products.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
            </ul>
        </div>
    );
}

export default ProductListPage;
