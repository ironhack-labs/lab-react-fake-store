import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [products, setProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>
                <strong>Price: </strong>${product.price}
              </p>
              <img src={product.image} alt={product.title} width="100px" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
