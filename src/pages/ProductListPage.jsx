import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      })
    }
    fetchProducts();
    }, []);
    const {id} = useParams();
    console.log(products)
  return (
    <Link to={`/product/details/${id}`}> 
    <div className="ProductListPage">
      {products && products.map((oneProduct) => {
        return (
        <div key={oneProduct.id} className="product-card">
        <img src={oneProduct.image}/>
        <h6>{oneProduct.title}</h6>
        <h6>{oneProduct.category}</h6>
        <p>${oneProduct.price}</p>
        <p>{oneProduct.description.substring(0,100)}...</p>
        </div>)
      })}
    </div>
    </Link>
  );
}

export default ProductListPage;
