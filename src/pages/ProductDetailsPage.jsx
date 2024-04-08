import { useEffect, useState } from "react";
// Import the parameter from the ROUTE to know where what page we should open
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // Extracting the parameter that is defined  in the Route which is productId   <Route path="/products/details/:productId" element={<ProductDetailsPage />}
  const { productId } = useParams(); // Notice that we use the Brackets () to INVOKE the function useParams

  // let's make it inside the useEffect first as a side-effect
  useEffect(() => {
    // let's make a function inside ..
    async function fetchProductDetails() {
      try {
        // Await the fetch call and store the response
        // Here we are fetching the data from THAT product ( the clicked one )
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        // Await the transformation of the response to JSON
        const data = await response.json();
        // Update the product state with the fetched data
        setProduct(data);
      } catch (error) {
        // Log the error if the fetch fails
        console.error("Error fetching product details:", error);
      }
    }

    // Check if the productId is not null, then call the function
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // and here we are DISPLAYING IT !
  return (
    <div className="ProductDetailsPage">
      {product ? (
        <div className="details-Container">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          {/* Add more product details here as needed */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
