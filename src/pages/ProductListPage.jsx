import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log("Error getting info from the API", e));
  }, []);

  return (
    <>

      {products && products.map((productDetails) => {

          return (
            <div  key={productDetails.id}>
              
              <Link to={`/product/details/${productDetails.id}`} className="ProductListPage">
                <p><img src={productDetails.image} alt="product image" /></p>
                <p>{productDetails.title}</p>
                <p>{productDetails.category}</p>
                <p>{productDetails.price}</p>
                <p>{productDetails.description}</p>
              </Link>

            </div>
          );

      })}

    </>
  );
}

export default ProductListPage;
