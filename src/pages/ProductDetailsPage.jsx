import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {

  const [product, setProduct] = useState(null);

  const {productId} = useParams()

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + productId)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((e) => {
      console.log(e)
    })
  }, [productId])


  return (
    <div className="ProductDetailsPage">
      {product !== null &&
      <div>
      <img src={product.image}/>
      <label>{product.category}</label>
      <p><strong>{product.title}</strong></p>
      <div className="flexbox">
      <p className="description">{product.description}</p>
      <p className="price"><strong>${product.price}</strong></p>
      </div>
      <hr />
      <Link to="/"><button>Back</button></Link>
      </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
