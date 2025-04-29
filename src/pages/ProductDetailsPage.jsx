import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function ProductDetailsPage() {

  const [product, setProduct] = useState({});

  const { productId } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch(e => console.log("Error getting character details from the API...", e));
  }, []);

  return (
    <div className="ProductDetailsPage">
      
      <img src={product.image} alt="image" />
      <h2 className="manu">{product.category}</h2>
      <h2 className="otamendi"><strong>{product.title}</strong></h2>
      <div className="bebo">
        <h2 className="bebida">{product.description}</h2>
        <h2 className="pavlidis"><strong>${product.price}</strong></h2>
      </div>
      <div className="bel">
        <Link to="/">
          <button className="vida">Back</button>
        </Link>
      </div>
    </div>

  );
}

export default ProductDetailsPage;
