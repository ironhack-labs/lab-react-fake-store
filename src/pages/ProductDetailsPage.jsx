import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
const URLPro = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
	// The state variable `product` is currently an empty object {},
	// but you should use it to store the response from the Fake Store API (the product details).
	const [product, setProduct] = useState({});
	const { productId } = useParams();
	// console.log({productoId})
	const navigate = useNavigate();

  const volverAtras = () => {
    navigate(-1);
  };
	// The `productId` coming from the URL parameter is available in the URL path.
	// You can access it with the `useParams` hook from react-router-dom.

	// To fetch the product details, set up an effect with the `useEffect` hook:

	useEffect(() => {
		// Función para obtener los detalles del producto
		const fetchProductDetails = async () => {
			try {
				const response = await axios.get(`${URLPro}/${productId}`);
				setProduct(response.data); // Actualiza el estado con los detalles del producto
			} catch (error) {
				console.error("Error fetching product details:", error);
			}
		};

		fetchProductDetails();
	}, [productId]); // Dependencia en productId para que se ejecute cuando cambie

	return (
		<div className="ProductDetailsPage">
			<div className="details-img-container"><img src={product.image} alt={product.title} /></div>
			<p className="category">{product.category}</p>
			<h3>{product.title}</h3>
			<div className="descri-price">
				<p>{product.description}</p> {/* Descripción del producto */}
				<p>${product.price}</p>
			</div>
			<hr />
			<button onClick={volverAtras}>⬅️Volver</button>
		</div>
	);
}

export default ProductDetailsPage;
