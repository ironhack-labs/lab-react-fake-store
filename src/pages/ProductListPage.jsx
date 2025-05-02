import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log("API Response:", response); // Log full response
      console.log("Data:", response.data);
      setProducts(response.data);
      setFetching(false);
    });
  }, []);

 return (
   <div className="ProductListPage">
     <h3 className="text-lg font-bold">List of Products</h3>
     {fetching && <p className="text-gray-500">Loading...</p>}
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1">
       {products.map((product) => (
         <div
           key={product.id}
           className="bg-white shadow-md rounded-lg overflow-hidden"
         >

           <Link to={`/product/details/${product.id}`}>
             <img
               src={product.image}
               alt="product image"
               className="w-full h-48 object-cover"
             />
             <div className="p-4">
               <h3 className="text-lg font-medium">{product.title}</h3>
               <p className="text-gray-700 font-bold">Price: {product.price}</p>
             </div>
           </Link>
         </div>
       ))}
     </div>
   </div>
 );
}

export default ProductListPage;
