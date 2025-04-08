import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams();

  console.log(productId)

  async function getProduct (id) {
    console.log("fetching right product")
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const responseData = await response.json();

    setProduct(responseData)
  }

  useEffect(() => {
    getProduct(productId)
  }, [])

  console.log("current product; ", product)



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img className="detail-img" src={product.image} alt={product.title} />
    <div className="category-label">{product.category}</div>
    <h3 className="detail-title">{product.title}</h3>
    <div className="text-container">
    <p className="detail-description">{product.description}</p>
    <span>{product.price}€</span>
    </div>
    <hr />
    <Link to="/" className="back-btn-link">
    <button id="back-btn">Back</button>
    </Link>
    </div>

  );
}

export default ProductDetailsPage;
