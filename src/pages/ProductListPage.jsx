import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getFakeStoreData();
    console.log("products 1: ", products[0]);
  }, []);

  const getFakeStoreData = async () => {
    // setProducts(null);
    try {
      const apiResponse = await axios.get(`https://fakestoreapi.com/products/`);
      setProducts(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (products === null) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="product-card card">
            <img className="product-img" src={product.image} alt="" />
            <p className="product-title">{product.title}</p>
            <p className="product-category ">{product.category}</p>
            <p className="product-price">$ {product.price}</p>
          </div>
        </Link>
      ))}
      <p className="product category">producto</p>
    </div>
  );
}

export default ProductListPage;
