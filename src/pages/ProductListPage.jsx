import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await axios("https://fakestoreapi.com/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link
            to={`/product/details/${oneProduct.id}`}
            className="card"
            key={oneProduct.id}
          >
            <img src={oneProduct.image} alt={oneProduct.title} />
            <h4>{oneProduct.title}</h4>
            <p>{oneProduct.category}</p>
            <p>${oneProduct.price}</p>
            <p className="description">{oneProduct.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
