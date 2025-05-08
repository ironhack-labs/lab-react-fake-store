import { useEffect, useState } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) // convertir la resposta a JSON
      .then((json) => setProducts(json)); // desar les dades a l'estat products a través de setProducts
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => (
        <div>
          <img src={eachProduct.image} alt={eachProduct.title} />
          <h2>{eachProduct.title}</h2>
          <p>{eachProduct.category}</p>
          <p>{eachProduct.price}</p>
          <p>{eachProduct.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
