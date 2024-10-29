import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log("Oops. Something went wrong.");
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="product-card">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description.substring(0, 75) + " ..."}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
