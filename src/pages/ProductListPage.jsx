import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setProducts(data);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      {products ? (
        products.map((item) => {
          // O return deve abrir e fechar corretamente apenas uma vez
          return (
            <Link to={`/product/details/${item.id}`} key={item.id} className="productCard">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.price}$</p>
            </Link>
          );
        })
      ) : (
        <p>Loading List...</p>
      )}
    </div>
  );
}

export default ProductListPage;
