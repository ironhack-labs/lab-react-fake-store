import axios from "axios";
import { useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(product => (
        <div className="d-flex flex-row align-items-center gap-5 bg-light my-2" key={product.id}>
          <div className="col-2 p-3 ">
            <img style={{ border : "1px solid black",maxWidth: "150px" }} src={product.image} alt={product.title} />
          </div>
          <div className="col-2 d-flex justify-self-center">
            <h2 className="fs-6 fw-bold">{product.title}</h2>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <h3 className="fs-5">{product.category}</h3>
          </div>
          <div className="col-1 d-flex justify-self-center">
            <h3 className="fs-5">{product.price}</h3>
          </div>
          <div className="col-2 d-flex justify-self-center">
            <h3 className="fs-6">{product.description.slice(0, 50)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
