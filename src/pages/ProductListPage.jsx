import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="block border p-4 my-2"
          >
            <li>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width="80" />
              <p>{product.price} €</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
