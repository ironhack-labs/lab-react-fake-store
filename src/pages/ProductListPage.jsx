import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const prodFakeStoreApi = 'https://fakestoreapi.com/products'


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(prodFakeStoreApi)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProducts(data)
      })
  }, [])


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card card-front">
              <div className="img-container">
                <img src={product.image} alt="productImage" />
              </div>
              <div className="title">{product.title}</div>
              <div>{product.category}</div>
              <div>{`$${product.price}`}</div>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
