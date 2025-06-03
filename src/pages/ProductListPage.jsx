import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((dataProd) => {
        setProducts(dataProd);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProd) => {
        return (
          <Link to={`/product/details/${oneProd.id}`}>
            <div className="content-card" key={oneProd.id}>
              <img src={oneProd.image} />
              <h3>
                <strong>{oneProd.title}</strong>
              </h3>
              <p>{oneProd.category}</p>
              <p>${oneProd.price}</p>
              <h4>{oneProd.description}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
