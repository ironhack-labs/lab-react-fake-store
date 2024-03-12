import { useState } from "react";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const nav = useNavigate();
  //go back function
  const handleBack = () => {
    nav("/");
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log("We made it to the then block, ", response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log("there was an error with one product", err));
  }, [productId]);
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="ProductDetailsPage">
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "300px" }}
      />
      <h3>{product.title}</h3>
      <Link to="/">back</Link>
      {/* <button onClick={handleBack}>Back</button> */}
    </div>
  );
}

