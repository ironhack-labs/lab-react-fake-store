import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // export const ProductListPage() = () =>

  //   function ProductListPage() {

  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

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

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      <h2>
        Absolutely amazing products that will fulfil your every need and make
        you more attractive to others
      </h2>

      <section id="products-page">
        {products &&
          products.map((oneProduct) => {
            return (
              <Link
                key={oneProduct.id}
                to={`/product/details/${oneProduct.id}`}
              >
                <div className="card">
                  <img alt={oneProduct.title} src={oneProduct.image} />
                  <p>{oneProduct.title}</p>
                  <p>{oneProduct.category}</p>
                  <p>{oneProduct.price}</p>
                  {/* <p id= "description">{oneProduct.description}</p> */}
                </div>
              </Link>
            );
          })}
      </section>

      {}
    </div>
  );
}

export default ProductListPage;
