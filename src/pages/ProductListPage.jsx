// import { useState } from "react";


// function ProductListPage() {
//   // The state variable `products` is currently an empty array [], 
//   // but you should use it to store the response from the Fake Store API (the list of products).
//   const [products, setProducts] = useState([]);

//   // To fetch the list of products, set up an effect with the `useEffect` hook:


//   return (
//     <div className="ProductListPage">
//       {/* Render list of products here */}
//     </div>
//   );
// }

// export default ProductListPage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch list of products from the Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
      }
    };

    // Call the async function
    fetchProducts();
  }, []); // Empty dependency array ensures the fetch runs only once
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ margin: "10px" }}>
              <Link to={`/product/details/${product.id}`} style={{ textDecoration: "none" }}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} width="100" />
                <p>Price: ${product.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductListPage;

