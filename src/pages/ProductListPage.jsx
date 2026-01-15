import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);

 
  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
       
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);  


  return (
    <div className="ProductListPage">
      {/* Grid container for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {/* Loop through each product and render a clickable card */}
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow block"
          >
            {/* Product image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            {/* Product title */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              {product.title}
            </h3>
            {/* Product price */}
            <p className="text-blue-600 font-bold text-xl">
              ${product.price}
            </p>
            {/* Product category */}
            <p className="text-gray-500 text-sm mt-2">
              {product.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
