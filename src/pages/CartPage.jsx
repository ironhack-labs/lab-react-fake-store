import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function CartPage() {

    const [cartProducts, setCartProducts] = useState([]);

    const [productId, setProductId] = useState(-1);

    const [productsDetail, setProductsDetail] = useState([]);

    useEffect(()=>{
        getData();
    }
    ,[]);

    useEffect(()=>{
        console.log("productId modificado", cartProducts.length );
        if(cartProducts.length > 0){
            console.log("hay productos en el carrito");
            getProductData(cartProducts[0].productId);
        }
    }, [productId])

    async function getData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/carts/5`);
            const data = await response.json();
            setCartProducts(data.products);
            setProductId(0);

        } catch (error) {
            console.log(error);
        }
    }

    
    async function getProductData(id) {
        try {
            
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();

            
            let cloneProducts = structuredClone(productsDetail);
            cloneProducts = [...cloneProducts, data];
            setProductsDetail(cloneProducts);

            
            console.log(cartProducts);
            let cloneCart = structuredClone(cartProducts);
            cloneCart.shift();
            
            setCartProducts(cloneCart);
            
            setProductId(id);

        } catch (error) {
            console.log(error)
        }
    }

    if(productId === -1) return <h3>Loading page...</h3>
    

    return(
        <> 
        
            {productsDetail.map((product)=>{
                return(
                    
                    <Link key={product.id} to={`/product/details/${product.id}`} >
                        <div className="card flex-center">
                            <img className="img-100" src={product.image} alt="product image" />
                            <h4 className="text-bold text-left text-overflow">{product.title}</h4>
                            <p>{product.category}</p>
                            <p className="text-bold text-blue">${product.price}</p>
                                        
                        </div>
                    </Link>
                );
            })}

        </>
    );
}

export default CartPage;