import { useState, useEffect } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);

 // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="ProductListPage">  {/* Render list of products here */}
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-700">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;

