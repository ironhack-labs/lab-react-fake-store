import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect ( () => {
    const fetchProductList = async function (){
      try {
        const res = await fetch ("https://fakestoreapi.com/products");
        const data = await res.json ();
        setProducts(data)
      }
      catch (error) {
        console.log(error)
      }
      }
      fetchProductList();
  
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products &&
        products.map((oneProduct) => {
          return (
            <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div  className="product-card">
              <img src={oneProduct.image} alt={oneProduct.title} />
              <h3>{oneProduct.title}</h3>
              <p>{oneProduct.category}</p>
              <p>$ {oneProduct.price}</p>
              <p>{oneProduct.description}</p>
            </div>
        </Link>
          );
        })}
    </div>

  );
}

export default ProductListPage;

