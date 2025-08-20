import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
    //axios
    // .get("https://fakestoreapi.com/products")
    // .then((response) => {
    //   setProducts(response.data);
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ProductListPage">
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
            
            <div className="card-container">
              {/* {eachProduct.id}  */}
              <img src={eachProduct.image}></img>
              <h4>{eachProduct.title}</h4>
              <p><span>{eachProduct.category}</span></p>
              <p>${eachProduct.price}</p>
              <p>{eachProduct.description}</p>
            </div>
            
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
