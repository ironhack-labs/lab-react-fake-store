import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      const prods = await fetch(url);
      const data = await prods.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleClick = () => {
    console.log("hanldeClick");
  };

  return (
    <div className="ProductListPage">
      {products.map(
        ({ id, title, category, description, image, rating, price }) => (
          <Link key={id} to={`product/details/${id}`}>
            <div className="card flex-row border" onClick={handleClick}>
              <div className="margin-x">
                <img src={image} alt="Product image" />
              </div>
              <div>{title}</div>
              <div>{category}</div>
              <div>{price}</div>
              <div>{description}</div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}

export default ProductListPage;
