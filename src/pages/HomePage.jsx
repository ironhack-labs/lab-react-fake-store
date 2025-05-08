import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(e => {
            console.log("error getting products from the API...", e);
        });
}, []);

return (
  <div className="ProductListPage">
    {/* Render list of products here */}
    <>

{ products === null
  ? <h2>loading...</h2>
  : <h2>Number of products in the API: {products.length}</h2>
}

{ products?.map((productDetails, index) => {
      return (
          <div key={index} className="card">
            <img src={productDetails.image}/>
              <h2>{productDetails.title}</h2>
              <p>{productDetails.price}</p>
              <p>{productDetails.category}</p>
              <p>{productDetails.description}</p>
          <Link to={`/product/details/${productDetails.id}`} >More Details</Link>
          
          </div>
      );
  })
}

</>
  </div>
);
}

export default ProductListPage;
