import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading products...</p>;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="ProductListPage" style={{ backgroundColor: "lightgray" }}>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex border-black border m-5"
        >
          <Link to={`/product/details/${product.id}`} className="flex bg-white" gap>
            <img
              className="h-[20vh] w-[30vw] object-contain border-gray-400"
              src={product.image}
              alt={product.title}
            />
            <h2 className="text-xl font-extrabold">{product.title}</h2>
            <h3>{product.category}</h3>
            <p className="text-gray-500">${product.price}</p>
            <p className="w-96">{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
