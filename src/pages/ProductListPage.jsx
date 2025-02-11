import { useEffect, useState } from "react";
import axios from "axios"; //1. Importo axios que ya está instalado

const allProductsURL = "https://fakestoreapi.com/products"; //2. API endpoint (Get all products)

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect hook - fetching products");
    axios.get(allProductsURL).then((response) => {
      setProducts(response.data);
      /* console.log(response.data) */
    })
    .catch((error) => { //Establece un catch por si ocurre algún error al traer la información
      console.log(error);
    })
  }, []);  

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.image} alt="product image" />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
