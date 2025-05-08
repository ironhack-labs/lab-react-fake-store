import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams(); // Extract productId from URL
  const navigate = useNavigate(); // Initialize navigate for Back button
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Handle adding product to cart
  const addToCart = () => {
    // Get cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, just update the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, show a success message (you could implement a toast notification here)
    alert(`${product.title} has been added to the cart!`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    
    <h1>{product.title}</h1>
    <div style={styles.detailsContainer}>
        <img
          src={product.image}
          alt={product.title}
          style={styles.image}
        />
        <div style={styles.info}>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} / 5</p>
          <p><strong>Description:</strong></p>
          <p>{product.description}</p>

          {/* Add to Cart Button */}
          <button onClick={addToCart} style={styles.addToCartButton}>
            Add to Cart
          </button>

          <button onClick={() => navigate(-1)} style={styles.backButton}>
            Back
          </button>
        </div>
        
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  detailsContainer: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "250px",
    height: "250px",
    objectFit: "contain",
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  backButton: {
    padding: "10px 20px",
    width: "100px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  addToCartButton: {
    padding: "10px 20px",
    width: "200px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745", // Green color for "Add to Cart"
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
};

export default ProductDetailsPage;
