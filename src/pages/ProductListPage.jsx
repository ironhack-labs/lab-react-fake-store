import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products using Axios
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Save response data to state
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Product List</h1>
      <div style={styles.container}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`} // Link with product id
            style={styles.link} // Optional: Add link styling
          >
            <div style={styles.card}>
              {/* Image Column */}
              <div style={styles.column}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.image}
                />
              </div>

              {/* Title Column */}
              <div style={styles.column}>
                <h3 style={styles.title}>{product.title}</h3>
              </div>

              {/* Category Column */}
              <div style={styles.column}>
                <p style={styles.category}>{product.category}</p>
              </div>

              {/* Price Column */}
              <div style={styles.column}>
                <p style={styles.price}>${product.price.toFixed(2)}</p>
              </div>

              {/* Rating Column */}
              <div style={styles.column}>
                <p style={styles.rating}>
                  Rating: {product.rating?.rate} / 5
                </p>
              </div>

              {/* Description Column */}
              <div style={styles.column}>
                <p style={styles.description}>{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  },
  card: {
    display: "grid", // Use grid for layout
    gridTemplateColumns: "150px 1fr 1fr 100px 150px 2fr", // Define 5 columns
    gap: "20px", // Add space between columns
    alignItems: "center", // Vertically align items
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  category: {
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
  },
  rating: {
    fontSize: "14px",
    color: "#FF9800",
    textAlign: "center",
  },
  description: {
    fontSize: "14px",
    color: "#777",
  },
};



export default ProductListPage;

/*
Explanation
1. useEffect with Empty Dependency Array:
The effect runs only once when the component is mounted because of the empty [] dependency array.

2. Axios GET Request:
axios.get("https://fakestoreapi.com/products"): Fetches product data from the Fake Store API.
.then() is replaced with await for cleaner asynchronous handling inside an async function.

3. State Management:
products: Holds the product list.
loading: Tracks the loading state for displaying a loading indicator.
error: Captures any errors during the fetch process and displays an error message.

4. Error and Loading States:
If loading is true, a loading message is shown.
If error is not null, the error message is displayed.

5. Rendering the Products:

The map function iterates over the products array, creating a list item (<li>) for each product.
Each product includes the title, image, price, and a link to the details page.
*/