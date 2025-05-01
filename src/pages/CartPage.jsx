import { useEffect, useState } from "react";

function CartPage() {
    const [cart, setCart] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/carts/6")
            .then((response) => response.json())
            .then((data) => {
                setCart(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (cart && cart.products && cart.products.length > 0) {
            const productsIds = cart.products.map((product) => product.productId);
            Promise.all(
                productsIds.map((id) =>
                    fetch(`https://fakestoreapi.com/products/${id}`)
                        .then((res) => res.json())
                )
            )
            .then((productsData) => {
                setProductDetails(productsData);  
            })
            .catch((err) => console.log(err));
        }
    }, [cart]); 

    return (
        <div className="CartPage">
            <h2>Mi Carrito</h2>
            <div>
                {productDetails.length > 0 ? (
                    productDetails.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img style={{ maxWidth: '200px', height: 'auto' }}  src={product.image} alt={product.title} className="img-thumbnail rounded-start " />
                            <div>
                                <h3 className="fw-bold">{product.title}</h3>
                                <p>{product.description}</p>
                                <p>Precio: ${product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en el carrito.</p>
                )}
            </div>
        </div>
    );
}

export default CartPage;
