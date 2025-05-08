import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((p) => {
        return (
          <Link key={p.id} to={`/product/details/${p.id}`}>
            <div className="product-card">
              <div>
                <img src={p.image} />
              </div>
              <div>
                <b>{p.title}</b>
              </div>
              <div>
                <p>{p.category}</p>
              </div>
              <div>
                <p>${p.price}</p>
              </div>
              <div>
                <p>{p.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
