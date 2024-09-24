import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {count: 120
//         rate: 3.9}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  const url = "https://fakestoreapi.com/products"
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch(url)
    .then((data)=>data.json())
    .then(data=>setProducts(data))
    .catch(error=>{console.log(error)})
    return ()=>{}
  }, [])

  if (products === null){
    return <h1>...Cargando productos</h1>
  }
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product)=>{
        return(
          <Link to={`/product/details/${product.id}`} key = {product.id}>
          <div className="product-row">
            <div className="product-row-izq">
              <div className="image-container">
                <img src={product.image} alt="" />
              </div>
              <p>{product.title}</p>
              <p>{product.category}</p>
            </div>
            <div className="product-row-der">
              <p>${product.price}</p>
              <p>{product.description.substring(0, 50)}...</p>
            </div>
          </div>
          </Link>
        )

      })}
    </div>
  );
}

export default ProductListPage;
