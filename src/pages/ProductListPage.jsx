import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const BASE_URL = "https://fakestoreapi.com";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log("Error getting data.", e));
  }, []);

  return (
    
    <div>
      {products.map((productObj, i) => (
        <Link
        key = {productObj.id}
        to = {`/product/details/${productObj.id}`}
        >
        <div className="container">
          <img  className = "block h-16"  src={productObj.image} />
          <p className="block" >{productObj.title}</p>
          <p className="block" > {productObj.price}</p>
          <p className="block" >{productObj.description}</p>
          <p className="block" >{productObj.category}</p>
        </div>
        </Link>

      ))}
    </div>


  );
}

export default ProductListPage;
