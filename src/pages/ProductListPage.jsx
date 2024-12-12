
import { useEffect, useState } from "react";
import ProductCard from "../components/products/product-card";
import PageLayout from "../components/layouts/page-layout/page-layout";
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then( (data) => setProducts(data))
      .catch((error) => console.log(error))
  }
    , [])

  return (
    <PageLayout className="d-flex flex-column gap-3">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </PageLayout>
  );
}

export default ProductListPage;
