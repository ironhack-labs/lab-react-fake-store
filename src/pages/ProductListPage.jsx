import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const jsonData = await response.json();
        setProducts(jsonData);
        console.log("Json data is fetched", jsonData);
      } else {
        throw new Error("Failed to fetch data response isn't ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetchProducts (); 
  }, [])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <ul>
        {products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <li>
                <img src={product.image} alt="Product image" />
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );

}

export default ProductDetailsPage;
