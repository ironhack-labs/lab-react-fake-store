import { useState, useEffect  } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";


function ProductListPage() {
  const {productId} = useParams()
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [product, setProduct] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() =>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) =>{
      console.log('Error fetching product details:', error)
    })
  }, [])


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {product && product.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.title}/>
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
