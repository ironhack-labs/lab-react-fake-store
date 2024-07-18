import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [productId]);

  return (
    <>
      <div className="ProductDetailsPage">
        <img
          className=" h-60 object-cover"
          src={product.image}
          alt={product.title}
        />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>

        <Link to={`/`}>
          <button>Home</button>
        </Link>
      </div>
      ;
    </>
  );
}

export default ProductDetailsPage;
