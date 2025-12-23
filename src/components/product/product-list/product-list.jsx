import { useEffect, useState } from "react";
import * as ProductsService from '../../../services/products-service';
import { Link } from "react-router-dom";


function ProductList() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function listProducts() {
      const products = await ProductsService.getList();
      setProducts(products);
    }

    listProducts();
  }, []);

  return (
    <div className="row">
      {products && products.map((product) => (
        <div className="col-3 g-2 card" key={product.id}>
          <div className="ratio ratio-1x1">
            <img src={product.image} className="object-fit-cover" alt={product.title} />
          </div>
          
          <div className="d-flex align-items-center flex-column">
            <h5 className="fw-bold fs-5 py-2">{product.title}</h5>
            <div className="mt-auto py-2">
              <Link to={`/product/details/${product.id}`} className="btn btn-primary">Ver</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;