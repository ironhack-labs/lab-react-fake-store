import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams(); //useParams captura o produto da url

  console.log("Product ID da URL:", productId);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
       if(!response.ok) {
        throw new Error('Product not found');
       }
       return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erro ao buscar produto:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="ProductDetailsPage">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product.id) {
    return (
      <div className="ProductDetailsPage">
        <p>Product Not Found</p>
        <Link to="/">Back to the list</Link>
      </div>
    );
  }

  return (
    <div className="ProductDetailsPage">
      <Link to="/" className="back-link">Back to products</Link>

      <div className="product-details-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info-section">
          <p className="product-category">{product.category}</p>
          <h1>{product.title}</h1>

          <div className="product-rating">
            <span>⭐ {product.rating?.rate}</span>
            <span>({product.rating?.count} ratings)</span>
          </div>
          
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <button className="btn-primary">Add to the card</button>
        </div>
      </div>

    </div>
  );
}

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


export default ProductDetailsPage;
