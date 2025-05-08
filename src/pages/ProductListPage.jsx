import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="border grid gap-4 align-content-center grid-cols-5 justify-items-center py-4 px-8 hover:shadow-lg">
              <img
                src={product.image}
                alt={`photo of ${product.title}`}
                className="w-64 h-64 p-4 border-2 object-cover"
              />
              <h3 className="text-lg h-fit font-bold">{product.title}</h3>
              <h4 className="text-lg h-fit">{product.category}</h4>
              <p className="h-fit text-base">${product.price}</p>
              <p className="h-fit text-base">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
