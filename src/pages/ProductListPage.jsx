import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function ProductListPage() {
  const { productId } = useParams()
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("success");
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("error", e)
      })
  }, [])
  console.log(products)
  return (

    <>
      {products.map((item) => {
        return (
          <Link to={`/product/details/${item.id}`}>
            <div className="ProductListPage">
              <img src={item.image} alt="product image" />
              <p>{item.title}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p>{item.description}</p>
            </div>
          </Link>
        )
      })
      }
    </>

  );
}

export default ProductListPage;
