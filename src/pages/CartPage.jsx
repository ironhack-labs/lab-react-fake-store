import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function CartPage({cartId}) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        // Fetch cart details
        axios.request(`https://fakestoreapi.com/carts/${cartId}`)
            .then((response) => {

                axios.request(`https://fakestoreapi.com/products`)
                    .then((productResponse) => {
                        const cartIds = response.data.products.map((item) => item.productId);
                        console.log(cartIds);

                        const filteredProducts = productResponse.data.filter((product) =>
                            cartIds.includes(product.id)
                        );
                        setCartProducts(filteredProducts);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [cartId]);

    return (
        <div className="CartPage">
            {cartProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CartPage;