import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [products, setProducts] = useState([]);
    const cartId = 1; 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then((res) => res.json())
            .then((cartData) => {
                setCart(cartData);

                    const productDetails = cartData.products.map((cartItem) =>
                    fetch(`https://fakestoreapi.com/products/${cartItem.productId}`)
                        .then((res) => res.json())
                );

                return Promise.all(productDetails);
            })
            .then((productDetails) => {
                setProducts(productDetails);
            })
            .catch((err) => console.log(err));
    }, [cartId]);

    if (!cart) {
        return <div>Loading...</div>;
    }
console.log(cart)
    return (
        <div>
            <h1>Cart</h1>
            {products.map((product) => (
                <Link key={product.id}
                to={`/product/details/${product.id}`}>
                <div key={product.id} className="cart-product">
                    <img src={product.image} alt={product.title} />
                   <strong><h2>{product.title}</h2></strong>
                    <p>{product.category}</p>
                    <p>${product.price}</p>
                    <p>{product.description.slice(0,100)+"..."}</p>
                    <p>Quantity: {cart.products.find((item) => item.productId === product.id).quantity}</p>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Cart;