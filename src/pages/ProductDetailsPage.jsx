import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
	const { productId } = useParams();
  const navigate = useNavigate ()
	const [product, setProduct] = useState({});

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.error("Error getting product details:", error);
			});
	}, [productId]);

  const goToNextProduct = () => {
    navigate(`/product/details/${parseInt(productId) + 1}`);
  };

  const goToPreviousProduct = () => {
    if (parseInt(productId) > 1) {
      navigate(`/product/details/${parseInt(productId) - 1}`);
    }
  };



	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	return (
		<div className="ProductDetailsPage">
  <div className="product-details-card">
	<img src={product.image} alt={product.title} className="details-image" />
	<div className="details-info">
	  <h1>{product.title}</h1>
	  <div className="info-line">
		<span className="category">{product.category}</span>
		<span className="price">${product.price}</span>
	  </div>
	  <p>{product.description}</p>
	  <p>
		Rating: {product.rating?.rate} ({product.rating?.count})
	  </p>
	</div>
  </div>
  <div className="buttons">
        <button onClick={goToPreviousProduct} disabled={parseInt(productId) === 1} style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius:'8px' }}>
          Previous
        </button>
        <button onClick={goToNextProduct} style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius:'8px' }}>Next</button>
        <Link to="/">
          <button style={{ backgroundColor: 'lightblue', padding: '10px', borderRadius:'8px'}}>Return</button>
        </Link>
</div>
		</div>
	);
}

export default ProductDetailsPage;
