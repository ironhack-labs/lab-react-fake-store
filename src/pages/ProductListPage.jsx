import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setProducts(data)
    })
    .catch((error) => {
      console.log(error);  
    })
  }, [])

  if(products.length === 0) {
    return (<h3>... cargando datos</h3>)
  }

  return (
    <div className="ProductListPage">
      {
        products.map((eachProduct) => {
          return (
            <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
              <div className="product-container">
                <img src={eachProduct.image} alt={eachProduct.title} />
                <p>{eachProduct.title}</p>
                <p>{eachProduct.category}</p>
                <p>{eachProduct.price}</p>
                <p>{eachProduct.description}</p>
              </div>
            </Link>
            
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
