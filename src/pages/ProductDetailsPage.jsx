import ProductsDetails from "../components/ProductsDetails";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  /* const [product, setProduct] = useState({ ProductsDetails });
  const { productId } = useParams(); */
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return <div className="ProductDetailsPage">{<ProductsDetails />}</div>;
}

export default ProductDetailsPage;
