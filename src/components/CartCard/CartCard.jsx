import './CartCard.css'

function CartCard({ cartData, products }) {
    return (
        <div className="cart-product-card">
            {
                cartData?.products?.map(cartProduct =>
                    <div key={cartProduct.productId}>
                        <img className="cart-image" src={products.find(product => product.id === cartProduct.productId).image} />
                        <h3 className="cart-title">{products.find(product => product.id === cartProduct.productId).title}</h3>
                        <p>Quantity: {cartProduct.quantity}</p>
                        <br />
                    </div>
                )
            }
        </div>
    )
}

export default CartCard