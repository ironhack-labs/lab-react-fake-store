import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then ((response) => {
      return response.json();
    })
    .then ((data) => {
      //console.log(data);
      setProducts(data);
    })
    .catch ((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
      {/* Render list of products here */}
        {products.map(oneProduct => (
            <li key={oneProduct.id} className="product-card">
              <Link to={`/product/details/${oneProduct.id}`}>
                <div className="image-card">
                  <img src={oneProduct.image} />
                </div>
                <h3>{oneProduct.title}</h3>
                <p>${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
              </Link>
          </li>
        )
      )
    }
        </ul>
    </div>
  );
}

export default ProductListPage;
