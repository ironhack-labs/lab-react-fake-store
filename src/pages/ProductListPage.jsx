import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>List of items</h1>
      {products &&
        products.map((oneProduct) => {
          return (
            <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
              <div className="card">
                <img
                  className="cover-img"
                  src={oneProduct.image}
                  alt={oneProduct.title}
                />
                <h2 className="title">{oneProduct.title}</h2>
                <label>{oneProduct.category} </label>
                <h3>$ {oneProduct.price} </h3>
                <p>{oneProduct.description} </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
