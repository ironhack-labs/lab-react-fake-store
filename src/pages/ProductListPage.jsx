import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // To fetch the list of products, set up an effect with the `useEffect` hook:
    async function getProducts() {
      try {
        const responseFromFetch = await fetch(
          "https://fakestoreapi.com/products"
        );
        const actualData = await responseFromFetch.json();
        console.log(actualData);
        //finally all good and we have the data then we set the state
        setProducts(actualData);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="productListPage">
      {products.map((oneProduct) => {
        return (
          <Link to={`/product/details/${oneProduct.id}`}>
            <div className="allProds">
              <img src={oneProduct.image}></img>
              <h1 className="title">{oneProduct.title}</h1>
              <p className="categ">{oneProduct.category}</p>
              <p className="price">{oneProduct.price}</p>
              <p className="prodDesc">{oneProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
