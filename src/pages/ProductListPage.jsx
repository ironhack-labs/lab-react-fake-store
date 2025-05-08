import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getAdds() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const parsedResponse = await response.json();
        console.log("all Adds", parsedResponse);
        setProducts(parsedResponse);
      } catch (err) {
        console.log("error", err);
      }
    }
    getAdds();
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h2>All products</h2>

      {/* <Link to="/product/details/:productId"> */}

      {products &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <Link
                className="productsContainer"
                to={`/product/details/${product.id}`}
              >
                <img src={product.image} alt="image of the product" />
                <h3><strong>{product.title}</strong></h3>
                <h3>{product.category}</h3>
                <h3>${product.price}</h3>
                <h3>{product.description.slice(0,30)}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default ProductListPage;
