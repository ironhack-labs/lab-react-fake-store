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
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products === null) {
    return <h3>... cargando</h3>;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          <Link to={`/products/details/${eachProduct.id}`} key={eachProduct.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
                border: "3px solid black",
              }}
            >
              <img
                src={eachProduct.image}
                alt={eachProduct.title}
                width="100px"
                style={{ margin: "5px", border: "3px solid black" }}
              />
              <h3 style={{ margin: "5px" }}>{eachProduct.title}</h3>
              <h4 style={{ margin: "5px" }}>{eachProduct.category}</h4>
              <h4 style={{ margin: "5px" }}>{eachProduct.price}</h4>
              <p style={{ margin: "5px" }}>{eachProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
