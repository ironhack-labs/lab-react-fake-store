import { useState, useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch ('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        setProducts(allProducts);
      }
      catch (err) {
        console.log('careful! there was a glitch')
      }
    };
    fetchProducts();
  }, []);
  


  return (
    <div className="ProductListPage">

      {products.map(product => (
        <Link 
        key={product.id}>
          to={`/product/details/${product.id}`}
        </Link>
  ))};
  </div>
  );
}

export default ProductListPage;
