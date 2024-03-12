import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const allProducts = await response.json();
         console.log("here are my chars", allProducts);
        setProducts(allProducts);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts();
  }
   ,[])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      {products.map((product) => {
        return (
          <>
          <Link to={`/product/details/${product.id}`} key={product.id}>
          
          <div className="card">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <h5>{product.category}</h5>
            <p className="description">{product.description}</p>
          </div>
          </Link>
          </>
        )
      })}
    </div>
  );
}

export default ProductListPage;
