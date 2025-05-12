import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CardPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/carts/" + 1;
  const apiUrlProducts = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const promisesArr = useRef([]);

  const cartFetch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      for (const product of data.products) {
        const productPromise = fetch(
          apiUrlProducts + "/" + product.productId
        ).then((res) => res.json());
        promisesArr.current.push(productPromise);
      }
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const cartDetails = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    cartFetch();
    cartDetails();
  }, []);

  useEffect(() => {
    Promise.all(promisesArr.current)
      .then((results) => setProducts(results))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [cart]);

  if (!cart.products) return "loading...";

  return products.map((product) => <div> {JSON.stringify(product)} </div>);

  return;
  return (
    <div className="container">
      {JSON.stringify(cart)}
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: "100px",
          width: "auto",
        }}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price ${product.price}</p>
      <Link to={"/"}>
        <button className="btn-primary"> Back </button>
      </Link>
    </div>
  );
}
export default CardPage;
