import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    getData();
  },[])

  async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  if(products.length === 0) return <h3>Loading page...</h3>

  return (
    <div className="ProductListPage container">
      {/* Render list of products here */}
      {
        products.map((product)=>{
          return(
            <Link key={product.id} to={`/product/details/${product.id}`} >
              <div className="card flex-center">
                <img className="img-100" src={product.image} alt="product image" />
                <h4 className="text-bold text-left text-overflow">{product.title}</h4>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p className="text-overflow">{product.description}</p>
              </div>
            </Link>
          );
        })
      }
    </div>
  );
}

export default ProductListPage;