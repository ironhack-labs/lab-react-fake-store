import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        // console.log(products);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`}>
          <div key={product.id} className="card flex-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-cover"
            />
            <h3 className="font-bold text-lg mt-2">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
