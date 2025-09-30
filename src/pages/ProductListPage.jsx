import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    async function getProduct() {
      try {
        const responce = await fetch("https://fakestoreapi.com/products");
        const data = await responce.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();
  }, []);
  return (
    <div className="ProductListPage">
      {products &&
        products.map((oneproduct) => {
          return (
            <div key={oneproduct.id} className="card">
              <Link to={`/product/details/${oneproduct.id} `}>
                <img src={oneproduct.image} />
              </Link>
              <h5> {oneproduct.price} </h5>
              <h5> {oneproduct.title}</h5>
              <p> {oneproduct.description} </p>
              <section> </section>
            </div>
          );
        })}
    </div>
  );
}

export default ProductListPage;
