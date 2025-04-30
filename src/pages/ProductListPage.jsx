import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FAKE_STORE_API = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([FAKE_STORE_API]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(FAKE_STORE_API);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div>
            <Link to={`/product/details/${product.id}`}>
              <div className="card" key={product.id}>
                <img className="productImg" width="100px" src={product.image} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <h4 className="productDescription">{product.description}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;

/*  async function fetchData() {
    const response = await fetch(FAKE_STORE_API);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));

    const data = await response.json();
    setProducts(data);
  } */
