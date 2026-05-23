import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) => setProducts(response.data))
    //   .catch((error) => console.log(error))

    const getProducts = async () => {
      try {
        setIsLoading("true");
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading("false");
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // getProducts()
  return (
    <div className="ProductListPage">
      {isLoading ? (
        products.map((product) => {
          return (
            <div key={product.id} className="w-screen flex items-center">
              <Link to={`/product/details/${product.id}`}>
                <img src={product.image} alt="" className="w-[10vw]" />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}

export default ProductListPage;
