import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    // 3. Usamos el fetch para acceder a la API
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products === null) {
    return <h2>...buscando productos</h2>;
  }

  return (
    <div className="ProductListPage">
      {products.map((eachProducts) => {
        return (
          <Link
            to={`/product/details/${eachProducts.id}`}
            key={eachProducts.title}
          >
            <div className="listCard">
              <div className="product-izq">
              <img src={eachProducts.image} width="60px" alt="img-product" />
              </div>
              <div className="product-der">
                <p className="product-title"> {eachProducts.title}</p>
                <p className="product-category">{eachProducts.category}</p>
                <p className="product-price">${eachProducts.price}</p>
                <p className="product-decription">{eachProducts.description}</p>
              </div>
             
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
