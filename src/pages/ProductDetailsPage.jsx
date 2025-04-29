import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  async function getOneProduct() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {isLoading ? (
        <p>Loading really quick your thing...</p>
      ) : (
        <>
          <img className="oneProductImage" src={product.image} alt={`Picture of ${product.title}`} />

          <p className="catLabel">{product.category}</p>
          <h2 className="oneProductTitle">{product.title}</h2>
          <div className="oneProductInfos">
            <p>{product.description}</p>
            <h3 className="oneProductPrice">{product.price}$</h3>
          </div>
          <button className="oneProductBtn">
            <Link to="/">Back</Link>
          </button>
        </>
      )}
    </div>
  );
}

export default ProductDetailsPage;
