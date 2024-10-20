import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


