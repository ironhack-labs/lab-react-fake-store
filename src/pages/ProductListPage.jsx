import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log (response.data);

      setProducts(response.data);

      setIsFetching(false);
    })
    .catch((error) => {
      console.log(error);
      
      setIsFetching(false);
    });
    }, []);

    if (isFetching) {
      return <h2>Loading...</h2>;
    }
  

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <div key={product.id}>

            <Link to={`/product/details/${product.id}`}>

            <h3>{product.title}</h3>

            <img
            src={product.image}
            alt={product.title}
            width="120"
            />

            </Link>

            <p>${product.price}</p>

            </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
