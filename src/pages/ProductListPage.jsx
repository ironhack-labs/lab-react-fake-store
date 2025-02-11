import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  const getAllProductsURL = 'https://fakestoreapi.com/products'

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(getAllProductsURL)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="ProductListPage" >
      {products && products.map(product => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="divProducts">
            <img src={product.image}/>
            <h4>{product.title}</h4>
            <p>{product.category}</p>
            <p>{product.price}$</p>
            <p>{product.rating.rate}</p>
          </div>
        </Link>
      ))}

    </div>
  );
}

export default ProductListPage;
