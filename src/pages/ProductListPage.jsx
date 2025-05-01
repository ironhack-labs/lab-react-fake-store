import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        //with fetch you always have to return the second promise, convert it to json
        return response.json();
      })
      .then((data) => {
        console.log("here is the data: ", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price} USD</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default ProductListPage;
