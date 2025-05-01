import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:

    // The state variable `products` is currently an empty array [], 
    // but you should use it to store the response from the Fake Store API (the list of products).
    

    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const parsedResponse = await response.json();
        setProduct(parsedResponse);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    useEffect(() => {
      fetchDetails();
    }, []);


  return (
    <div className="ProductDetailsPage">
        <ul>
        <li key={product.id} className="card">
            <img src={product.image} alt={product.title} /> 
            <h3>{product.title}</h3>
             <p className="content">{product.category}</p>
              <p className="content">{product.price}</p> 
              <p className="content">{product.description}</p></li>
        </ul>
       <Link to="/"> <button type="button">Back</button> </Link>
    {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
