import axios from 'axios'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../index.css';


function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log('Error getting products from the api...', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="ProductListPage">
      {products.map((productObj) => {
        return (
          <Link to={`/product/details/${productObj.id}`} className="card-link" key={productObj.id}>
            <div className='card' key={productObj.id}>
              <img src={productObj.image} alt={productObj.title}/>
              <h1>{productObj.title}</h1>
              <p>{productObj.category}</p>
              <p>{productObj.price}</p>
              <p>{productObj.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;

