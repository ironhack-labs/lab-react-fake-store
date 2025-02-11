import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailsPage() {
  const { productId } = useParams()
  const navigate = useNavigate();
  const getDetailsProductsURL = `https://fakestoreapi.com/products/${productId}`

  const [product, setProduct] = useState({});


  useEffect(() => {
    fetch(getDetailsProductsURL)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId])

  return (
    <div className="ProductDetailsPage">
        <div key={product.id} className="divDetails">
          <img src={product.image} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}$</p>
          <p>Rate: {product.rating?.rate}</p>
          <p>Count: {product.rating?.count}</p>
          <button onClick={() => navigate('/')} className="backButton">Back</button>
        </div>
    </div>
  );
}

export default ProductDetailsPage;
