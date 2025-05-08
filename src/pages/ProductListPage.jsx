import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState(null);
  const url = "https://fakestoreapi.com/products";
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <div>
      {products !== null ? (
        products.map((elem) => {
          console.log(elem);
          return (
            <div key={elem.id}>
              <div>
                <img src={elem.image} alt="image" />
              </div>
              <div>
                <p>{elem.title}</p>
                <p>{elem.price}</p>
                <p>{elem.category}</p>
                <p>{elem.description}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/product/details/${elem.id}`);
                }}
              >
                Details
              </button>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default ProductListPage;
