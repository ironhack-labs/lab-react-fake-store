import { useEffect, useState } from "react";

export default function CartPage() {

    const getCart = 'https://fakestoreapi.com/carts/5'

    const [cart, setCart] = useState({});

    useEffect(() => {

        fetch(getCart)
            .then(response => response.json())
            .then(data => setCart(data))
            .catch((err) => console.log(err));
    }, [])

    const getSpecificProducts = cart?.products?.map((product, index) => (
        <>
            <div className="product-card" key={index}>
                <p> https://fakestoreapi.com/products/{product.productId}</p>
                <p>{product.productId} </p>
            </div>
        </>
    ));


    const getProducts = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(getProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch((err) => console.log(err));
    }, [])

    const cartProductIds = cart?.products?.map(product => product.productId) || [];
    const filteredProducts = products.filter(product => cartProductIds.includes(product.id));

    return (
        <>
            <div>
                <div className="ProductListPage" key={cart.id}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} className="product-img" alt={product.title} />
                                <p className="product-name">{product.title}</p>
                                <p className="product-info">{product.category}</p>
                                <p className="product-info">${product.price}</p>
                                <p className="product-desc">{product.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading cart products...</p>
                    )}
                </div>
            </div>
        </>
    )
}