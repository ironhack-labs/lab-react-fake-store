import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const products = await response.json();
          console.log(products);
          setProducts(products);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h3>List of products</h3>
      {products.map((currentProduct) => {
        return (
          <Link
            to={`/product/details/${currentProduct.id}`}
            key={currentProduct.id}
          >
            <div className="product-ctn">
              <img
                src={currentProduct.image}
                style={{ maxWidth: "12%" }}
                alt=""
              />
              <p>{currentProduct.title}</p>
              <p>{currentProduct.category}</p>
              <p>{currentProduct.price}</p>
              <p>{currentProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
