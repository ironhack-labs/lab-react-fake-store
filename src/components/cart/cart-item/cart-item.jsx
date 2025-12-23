import * as ProductsServices from './../../../services/products-service';

function CartItem ({ item, onChangeQuantity }) {

    return (<div className="shadow bg-body-tertiary rounded py-3 mb-2">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <img src={item.image} className="img-fluid rounded px-2" />
                        </div>
                        <div className="col-md-4">
                            <h6 className="mb-0">{item.title}</h6>
                            <small className="text-muted">{item.category}</small>
                        </div>
                        <div className="col-md-2">
                            <input 
                                type="number" 
                                className="form-control" 
                                value={item.quantity} 
                                min="1"
                                onChange={(e) => onChangeQuantity(item.id, e.target.value)}
                            />
                        </div>
                        <div className="col-md-2 text-end">
                            <strong>{item.price.toFixed(2)}€</strong>
                        </div>
                        <div className="col-md-2 text-end">
                            <button className="btn btn-outline-danger btn-sm">
                                ✖
                            </button>
                        </div>
                    </div>
                </div>
            </div>);
}

export default CartItem;