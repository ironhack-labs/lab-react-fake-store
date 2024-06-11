import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  const URL = "https://fakestoreapi.com/products";
  // const params = useParams();

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  async function fetchProducts() {
    try {
      const response = await axios.get(`${URL}`);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  if (!products) {
    console.log("loading");
    return;
  }
  return (
    <div className="ProductListPage">
      <ul>
        {products.map((prod) => {
          return (
            <div className="card" key={prod.id}>
              <Link to={`/product/details/${prod.id}`}>
                <li className="content flex-center">
                  <img width={120} src={prod.image} alt="" />
                  <h2>{prod.title}</h2>
                  <p>{prod.category}</p>
                  <p>{prod.price} €</p>
                  <p>{prod.description}</p>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
      {/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
