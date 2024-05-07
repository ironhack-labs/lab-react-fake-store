import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=> {
  axios.get("https://fakestoreapi.com/products")
  .then((response) => {
    setProducts(response.data)
  })
  .catch((e) => {
    console.log("error", e);
  });
}, []);

  return (
    <div className="ProductListPage">
      {products === null
      ? <h2>Getting products...</h2>
      : (<h2>We have {products.length} products</h2>)
      }
      { products?.map((ProductDetails, index)=> {
        return (
          <div key={index} className="card">
            <img src={ProductDetails.img} alt="product"/>
            <h2>{ProductDetails.title}</h2>
            <p>{ProductDetails.category}</p>
            <p>{ProductDetails.price}</p>
            <p>{ProductDetails.description}</p>

            <Link to={`/product/details/${ProductDetails.id}`}> </Link>

          </div>
        );
      })

      }
    </div>
  );
}

export default ProductListPage;
