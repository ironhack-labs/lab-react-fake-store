import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";

function Cart(){
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    let productsGrp = {};
    const groupOfProducts = [];
    let runProductCall = false;
    let productArrLength = 0;
    let cartTotal = 0;

    function calculateCartTotal(){
        let total = 0;
        if(products.length>0){
            
            products.forEach((item)=>{
            total+=item.price;
        });
        setTotal(total.toFixed(2));
       }
        
    }

    function getProduct(product){
        if(products.length===cart.products.length){
            calculateCartTotal();
            runProductCall = false;
        }
        if(runProductCall){
            fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then((response) => { 
                return response.json();
            }).then((data) => {
                console.log(data);
                let temp = {"quantity": product.quantity};
                productsGrp = Object.assign(data, temp);
                console.log("Parsed response: ", productsGrp);
                groupOfProducts.push(productsGrp);
                setProducts(groupOfProducts);
            }).catch((err) => console.log("Something went wrong!", err));
        } 
    }

    useEffect(()=>{
        fetch("https://fakestoreapi.com/carts/5")
          .then((response) => { 
            return response.json();
          }).then((data) => {
            console.log("Parsed response: ", data.products);
            setCart(data);
            productArrLength = data.products.length; 
            if(data.products!={}){
              
                runProductCall = true;
                
                if(data.products!==undefined){
                    data.products.forEach((product, index)=>{
                        getProduct(product);
                    });
                }
            }
        }).catch((err) => console.log("Something went wrong!", err));
    }, [cart])

    return (
        <div>
            <div className="top-row">
                <div className="header"><h1>Shopping Cart</h1></div>
                <div className="total">Cart Total:&nbsp;<span>${total}</span></div>
            </div>
            <div className="table-layout-one">
                <div className="table-col"></div>
                <div className="table-col">Product</div>
                <div className="table-col">Category</div>
                <div className="table-col">Quantity</div>
                <div className="table-col">Price</div>
                <div className="table-col">Total</div>
            </div>
        {products.map(product=>
            <div key={product.id} className="table-layout">
                <div className="table-img table-col"><img src={product.image} alt={product.title} /></div>
                <div className="table-col bold-font"><Link to={`/product/details/${product.id}`}><bold>{product.title}</bold></Link></div>
                <div className="table-col">{product.category}</div>
                <div className="table-col">{product.quantity}</div>
                <div className="table-col"><bold>${product.price.toFixed(2)}</bold></div>
                <div className="table-col">${(product.price*product.quantity).toFixed(2)}</div>
            </div>
        )}
                            
        
    </div>)
}
export default Cart