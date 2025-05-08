import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products === null) {
    return <h3>...Loading...</h3>;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h5>Product list</h5>
      {products &&
        products.map((eachProduct) => {
          return (
            <Link to={`/product/details/${eachProduct.id}`}>
            
            <div className="card" key={eachProduct.id}>
              <img src={eachProduct.image} height={150} width={150} alt="product" />
              <p>{eachProduct.title}</p>
              <p>{eachProduct.category}</p>
              <p>{eachProduct.price}</p>
              <p> {eachProduct.description} </p>
            </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
