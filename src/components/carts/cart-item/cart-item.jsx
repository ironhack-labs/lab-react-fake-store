
function CartItem({ title, image, price, quantity }) {

    return (
        <div className="d-flex align-items-center mt-5 shadow p-3 mb-5 bg-body-tertiary rounded mx-auto gap-5"
            style={{width: '750px', height: '100px'}}>
            <img src={image} alt={title} style={{height: '50px', width: '50px', objectFit: 'contain'}}/>
            <div style={{width: '300px'}}>{title}</div>
            <div style={{width: '200px'}}>${price}</div>
            <div style={{width: '200px'}}>{quantity}</div>
        </div>
    );
}

export default CartItem;