import { useState } from "react";
import { useEffect } from "react";
import "./ProductListPage.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch ("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch ((error) => console.log(error))
  }, [])


  return (
    <div className="ProductListPage">
      {products.map ((products)=>{
        return(
          <Link to={`/product/details/${products.id}` } key={products.id} >
          <div className="container" >
            <img className="image" src={products.image} alt="product image" />
            <p className="title">{products.title}</p>
            <p className="category">{products.category}</p>
            <p className="price">{`${products.price}€`}</p>
            <p className="description">{products.description}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
