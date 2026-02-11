import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (products === null) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return(
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
            <div style={{display:"flex"}}>
              <img style={{width:"200px"}} src={eachProduct.image} alt="" />
              <div>
                <p>{eachProduct.title}</p>
                <p>{eachProduct.category}</p>
                <p>{eachProduct.description}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
