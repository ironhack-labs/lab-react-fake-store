import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        return setProduct(data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (product === null) {
    return <h3>... buscando producto</h3>;
  }

  return (
    <div className="ProductDetailsPage">
      <div className="contendor-principal">
        <img src={product.image} alt="" />
        <p className="mediano">{product.title}</p>
        <p className="chico">{product.category}</p>
        <p className="chico">{product.price}</p>
        <p className="grande">{product.description}</p>
      </div>
     <Link to="/">
     
     <button>Atras</button>
     </Link>
     
    </div>
  );
}

export default ProductDetailsPage;
