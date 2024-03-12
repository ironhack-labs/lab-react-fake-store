import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const allProducts = await axios("https://fakestoreapi.com/products");
        setProducts(allProducts.data);
      } catch (err) {
        console.log("error fetching products");
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="ProductListPage">
        {products &&
          products.map((oneProduct) => {
            return (
              <Link
                key={oneProduct.id}
                to={`/product/details/${oneProduct.id}`}
              >
                <div className="product-card">
                  <img src={oneProduct.image} style={{ height: "100px" }} />
                  <h3>{oneProduct.title}</h3>
                  <h3>{oneProduct.category}</h3>
                  <h3>{oneProduct.price}</h3>
                  <h3>{oneProduct.description}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductListPage;
