import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {

  const [product, setProduct] = useState(null);
  const {productId} = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log("Error getting info from the API", e));
  }, []);

  return (
    <div className="ProductDetailsPage">
      { product && 
          <div className="card">
              <p><img src={product.image} alt="product image" /></p>
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
          </div>
      }

      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;

  
