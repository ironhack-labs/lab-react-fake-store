import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

// Iteration 01 - request api data for a list of all products
const apiListUrl = "https://fakestoreapi.com/products";

//output example:
// [
//   {
//   id:1,
//   title:'...',
//   price:'...',
//   category:'...',
//   description:'...',
//   image:'...'
// },
// ]

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("product list - useEffect initial mounting");
    axios.get(apiListUrl).then((response) => {
      //once request done, take the response and set that data on the products state variable
      setProducts(response.data);
      //as soon as we receive response, loading is not true anymore
      setFetching(false);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h3>List of Products</h3>
      {fetching && <p>Loading ...</p>}

      {/* //this is how we will display the data received from api using .map() */}
      {products &&
        products.map((prod) => {
          return (
            //part of Iteration 02 to create the NavLinks to the detail page
            //the product details itself will only be showm
            <NavLink
              to={`/product/details/${prod.id}`}
              key={prod.id}
              {...products}
            >
              <div key={prod.id} className="card">
                <img src={prod.image} alt="product image" />
                <h3>{prod.title}</h3>
                <p>{prod.category}</p>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}

export default ProductListPage;
