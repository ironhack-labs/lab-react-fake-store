import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setProducts(null);

    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (products === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="ProductListPage">
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <li>
              <strong>{product.title}</strong> <br />
              {product.price} € <br />
              {product.category} <br />
              <img src={product.image} alt={product.title} width={100} />{" "}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
