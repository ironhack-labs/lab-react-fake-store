import { useState, useEffect} from "react";
import{Link} from "react-router-dom"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setProducts(result); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
     
 
 
}

useEffect(()=>{
fetchData();
},[]);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
            <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title}/>
              <p><strong>Price:</strong> ${product.price}</p>
           </Link>
            </div>
          ))}
    </div>
  );
}

export default ProductListPage;
