import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => {
        console.log(typeof resp);
        console.log("right after fetch", resp);
        return resp.json();
      })
      .then((resp) => {
        console.log(typeof resp);
        console.log("right after json", resp);
        setProducts(resp);
      });
  }, []);

  console.log(products);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      <img
        src="src/assets/cart.png"
        alt="cart icon"
        onClick={() => navigate("/cart")}
      />
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}>
            <div key={product.id} className="productLine">
              <img src={product.image} alt="product image" width="120" />
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
