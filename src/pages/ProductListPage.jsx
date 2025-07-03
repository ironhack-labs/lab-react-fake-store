import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

 

  useEffect(() =>{
       const getProducts = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json()
          setProducts(data);
          console.log(data)
        } catch (err) {
          console.error(err)
        }
    
      }

      getProducts()

  }, [])

  return (
    <div className="ProductListPage">
    
       <div className="flex flex-col gap-2">
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="w-full shadow p-4 bg-white flex items-center gap-2"
          >
     
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-48 object-contain flex-shrink-0"
            />
            <div className="flex-1 min-w-0 flex flex-col">
              <h3 className="font-semibold text-base line-clamp-2 mb-2">
                {product.title}
              </h3>
              <span className="font-bold text-lg mt-auto">${product.price}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default ProductListPage;
