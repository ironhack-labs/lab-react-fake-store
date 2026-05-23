import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
     .then((response) => response.data)
     .then((data) => setProducts(data))
     .catch((error) => console.log(error));
  }, []);


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (


          <Link to={`/product/details/${product.id}`}  key={product.id}>
             <div className="product-card">

            <img className="product-image"
            src={product.image} 
            alt={product.title} />

            <h2 className="product-title">{product.title}</h2>


            <p className="price">
              ${product.price}</p>

            <p className="product-description">{product.description}</p>

            </div>

          </Link>

         
        )
      })}
    </div>
  );
}

export default ProductListPage;
