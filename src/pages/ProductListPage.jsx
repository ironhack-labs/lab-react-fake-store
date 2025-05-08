import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const theData = await response.json();
        console.log(theData);
        setProducts(theData);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((oneProduct) => {
        return (
          <div key={oneProduct.id} className="card">
            <div>
              <img src={oneProduct.image} className="image" />
            </div>
            <Link to={`/product/details/${oneProduct.id}`}>
              <div>{oneProduct.title}</div>
            </Link>
            <div>{oneProduct.category}</div>
            <h4>${oneProduct.price}</h4>
            <p>{oneProduct.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
