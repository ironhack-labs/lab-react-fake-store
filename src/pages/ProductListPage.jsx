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
      .then((data) => {
        console.log(data);
        setProducts(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((currentProduct) => {
        return(
          <Link to={`/product/details/${currentProduct.id}`} key={currentProduct.id}>
          <div className="product-card" >
            <img src={currentProduct.image} alt="product image" />
            <h3><span id="product-title">{currentProduct.title}</span></h3>
            <h3>{currentProduct.category}</h3>
            <h3>${currentProduct.price}</h3>
            <h3>{currentProduct.description}</h3>
            </div>
            </Link>
        )
      })}
      </div>
  );
}

export default ProductListPage;
