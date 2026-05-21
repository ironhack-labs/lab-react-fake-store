import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
  const getProducts = async () => {
    try { 
      const response = await axios.get ('https://fakestoreapi.com/products/')
      setProducts(response.data)
    } catch (error) {
      console.log("Erreur API:", error);
    }
  }
  getProducts()
}, []);



  return (
    <div >
      <h1>All our products</h1>
      {products.length ? (
        <div>
          {products.map((element) => (
            <div key={element.id} >
              <div>
                <img src={element.image} alt={element.title} />
                <h2>{element.title}</h2>
                <p>{element.price} €</p>
              </div>
              <Link to={`/product/details/${element.id}/`}>
                <button>
                  details
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ProductListPage;
