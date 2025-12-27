import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json()) //converte a resposta para JSON
  .then((data) => {
    setProducts(data); //atualiza o estado com a lista de produtos
  })
  .catch((error) => console.log("Erro ao buscar dados:", error));
}, []); //array vazio significa que isso roda apenas uma vez(ao montar o componente)

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link
          key={product.id} to={`/product/details/${product.id}`}
          className="product-card"
          >
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
