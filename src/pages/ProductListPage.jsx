import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
	// The state variable `products` is currently an empty array [],
	// but you should use it to store the response from the Fake Store API (the list of products).
	const [products, setProducts] = useState([]);

	// To fetch the list of products, set up an effect with the `useEffect` hook:
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);

	return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id} className="product-card">
         <Link to={`/product/details/${product.id}`}>
          <img src={product.image} alt={product.title} className="product-image" />
		  <div className="product-main-info">
			
			  <h2>{product.title}</h2>
			
			<p className="category">{product.category}</p>
			<p className="price">€{product.price}</p>
		  </div>
		  </Link>
          </div>
	  ))}
	</div>
  );
}


export default ProductListPage;
