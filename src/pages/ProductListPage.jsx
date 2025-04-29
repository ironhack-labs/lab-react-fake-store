import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(e => {
        console.log("Error getting characters from the API", e);
      });
  }, []);
  


  return (
    <div className="ProductListPage">
      {products.map((productObj) => {
        return (
          <Link to = {`/product/details/${productObj.id}`}>
          <div className="list">
          <img src={productObj.image} alt="product image" />
          <h2 className = "product">{productObj.title}</h2>
          <p>{productObj.category}</p>
          <p>{productObj.price}</p>
          <p className = "desc">{productObj.description}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
