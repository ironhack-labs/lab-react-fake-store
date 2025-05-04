import axios from "axios";
import { useEffect, useState } from "react";

function CartProduct({ id, quantity }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  if (product === undefined) {
    return "Loading....";
  }

  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image} alt={product.title} style={{ width: 200 }} />
      </div>
      <div className="details-container">
        <h2>
          <strong>{product.title}</strong>
        </h2>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p>{quantity}</p>
      </div>
    </div>
  );
}

export default CartProduct;
