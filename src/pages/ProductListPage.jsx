import { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "../components/ProductItem.jsx/ProductItem";

const API_URL = "https://fakestoreapi.com/products"

function ProductListPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get(API_URL)
      .then(response => {
        setProducts(response.data)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="ProductListPage">
      <h1>listado de productos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductItem {...product} />
        ))}
      </div>

    </div>
  );
}

export default ProductListPage;
