import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  
  
  const { productId } = useParams();

 
  useEffect(() => {
    getData(); 
  }, [productId]);

  const getData = async () => {
    try {
     
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    }
    catch(error) {
      console.log(error);
    }
  };

  if (!product) {
    return <p>Getting Details...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      <p>Preço: <strong>{product.price}$</strong></p>
    </div>
  );
}

export default ProductDetailsPage;
