import { useEffect, useState } from "react";
import axios from "axios";
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);

  return (
    <div className="ProductListPage">
      {products.map((product, index) => (
        <Link to={"/product/details/" + product.id}>
          <div className="row-product" key={product.id}>
            <ul className="ul-product">
              <li>
                <img
                  className="prod-img"
                  src={product.image}
                  alt={"prod-image-" + product.id}
                />
              </li>
              <li>{product.title}</li>
              <li>{product.category}</li>
              <li>{product.price}</li>
              <li>{product.description}</li>
              {/*             
            <li>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </li> */}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
