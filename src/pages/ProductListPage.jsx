import React,{ useState, useEffect } from 'react';
import axios from 'axios';


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
       <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button>Details</button> {/* Adicione a funcionalidade de roteamento para a página de detalhes */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default ProductListPage;
