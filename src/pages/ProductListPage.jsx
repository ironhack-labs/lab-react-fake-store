import {useState, useEffect} from 'react';
import axios from 'axios';
const apiURL = 'https://fakestoreapi.com/products';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Mounting');
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='cards'>
      {products.map((prod) => {
        return (
          <div key={prod.id} className='card-item'>
            <div className='img-container'><img src={prod.image} /></div>
            <div className='title'>{prod.title}</div>
            <div className='category'>{prod.category}</div>
            <div className='price'>{prod.price} €</div>
            <div className='description'>{prod.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
