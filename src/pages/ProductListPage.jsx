import axios from "axios";
import { useEffect, useState } from "react";
import { Await, Link, useParams } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:



  useEffect(() => {
    getData();

  }, [])

  async function getData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data);
      setIsFetching(false);

    } catch (error) {
      console.log(error)
    }
  }
  if (isFetching === true) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="ProductListPage">
      {
        products.map((product, i) => {
          return (
            <Link key={product.id} to={`/product/details/${product.id}`}>
              <div  className="card content  label flex-center">
                <img src={product.image} className="content card" />
                <h2 className="label">{product.title}</h2>
                <h3 className="label">{product.category}</h3>
                <h3 className="label">{product.price}</h3>
                <h3 className="label">{product.description}</h3>

              </div>
            </Link>

          )
        })
      }
    </div>
  );
}

export default ProductListPage;