import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {

  const { productId } = useParams()

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [productId])

  if (product === null) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="ProductDetailsPage">
      {product.image && <img className="ProductImgDetails" src={product.image} alt="Product image" />}
            <h2>{product.title}</h2>
            <label>{product.category}</label>
            <p className="price">{product.price}€</p>
            <p>{product.description}</p>

            <Link to="/">
                <button>Back</button>
            </Link>
    </div>
  );
}

export default ProductDetailsPage;
