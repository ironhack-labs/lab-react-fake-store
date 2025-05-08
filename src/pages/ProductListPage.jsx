import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://fakestoreapi.com/products');
      console.log(response);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);


  return (
    <div className="ProductListPage">
      <ul className="ul-list">{products.map(product =>
        <li className="list" key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <div className="product">
              <img src={product.image} alt="image"/>
                <div>
                  <h1>{product.title}</h1>
                </div>
                <div>
                  <p className="price">{product.price} $</p>
                </div>
                <div>
                  <p className="category">{product.category}</p>
                </div>
                <div>
                  <p className="description">{product.description}</p>
                </div>
            </div>
          </Link>
        </li>
      )}</ul>
    </div>
  );
}

export default ProductListPage;

