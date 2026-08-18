import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {

  const params = useParams()

  const [product, setProduct] = useState({});

  useEffect(()=>{
    getData();
  },[])
  const getData = async () => {
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`,
      );
      const data = await response.json();
      console.log(response);
      setProduct(data);
    }catch (error) {console.log(error);}
  } 


  
  return (
    <div className="ProductDetailsPage">
      <img
        src={product.image}
        alt={product.title}
        height="200px"
      />

      <p>{product.category}</p>

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <Link to="/products">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
