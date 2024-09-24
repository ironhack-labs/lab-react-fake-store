import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function CartPage() {

    //Save los productos del Cart 
    const [cartProducts, setCartProducts] = useState([]);

    //Which product to fetch
    const [productId, setProductId] = useState(-1);

    //Save each Product Details
    const [productsDetail, setProductsDetail] = useState([]);

    //ComponentDidMount => Solo al crearse
    useEffect(()=>{
        getData();
    }
    ,[]);

    //Cuando actualicemos productId => Ya se ha guardado un producto nuevo
    useEffect(()=>{
        console.log("productId modificado", cartProducts.length );
        if(cartProducts.length > 0){
            console.log("hay productos en el carrito");
            getProductData(cartProducts[0].productId);
        }
    }, [productId])

    //Obtenemos los detales del cart y obtenemos el primer producto
    async function getData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/carts/5`);
            const data = await response.json();
            setCartProducts(data.products);
            setProductId(0);

        } catch (error) {
            console.log(error);
            // navigate("/error")
        }
    }

    //Obtenemos los detalles de un nuevo producto y pasamos al siguiente
    async function getProductData(id) {
        try {
            
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();

            //Añadimos un producto nuevo que renderizar
            let cloneProducts = structuredClone(productsDetail);
            cloneProducts = [...cloneProducts, data];
            setProductsDetail(cloneProducts);

            //Update de la lista de productos
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
    // if(!Object.keys(cartProducts).length ) return <h3>Loading page...</h3>

    return(
        <> 
        
            {productsDetail.map((product)=>{
                return(
                    // <h1 key={product.id}>{product.id}</h1>
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